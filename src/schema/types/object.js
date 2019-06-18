import Type_ from './type'
import { assert } from '~/scripts/debug'

export default class Object_ extends Type_ {
  constructor() {
    super()
    this._entries = {}
    this._optional = {}
    this._exclusive = false
    this._relations = []
  }

  check(v) {
    if (typeof v !== 'object') return false

    if (!Object.keys(this._entries).every(e => Object.keys(v).includes(e)))
      return false

    const allChecks = {
      ...this._entries,
      ...this._optional,
    }

    if (
      this._exclusive &&
      !Object.keys(v).every(e => Object.keys(allChecks).includes(e))
    )
      return false

    const keys = Object.keys(v)
    for (let e of this._relations) {
      if (!Object_._rel[e[0]](keys.includes(e[1]), keys.includes(e[2])))
        return false
    }

    return Object.entries(v).every(e =>
      Object.keys(allChecks).includes(e[0]) ? allChecks[e[0]].check(e[1]) : true
    )
  }

  entries(entr) {
    return this._addTo(entr, this._entries)
  }

  optional(entr) {
    return this._addTo(entr, this._optional)
  }

  exclusive() {
    this._exclusive = true
    return this
  }

  relation(txt) {
    assert(txt.split(' ').length === 3, 'invalid relation')
    const [a, rel, b] = txt.split(' ')
    assert(Object.keys(Object_._rel).includes(rel), `unknown relation "${rel}"`)
    this._relations.push([rel, a, b])
    return this
  }

  _addTo(entr, target) {
    assert(typeof entr === 'object')
    assert(
      Object.values(entr).every(v => v instanceof Type_),
      'Object_ entries must be children of Type_'
    )
    for (const prop in entr) {
      if (entr.hasOwnProperty(prop)) {
        if (prop in this._entries || prop in this._optional)
          throw Error(`duplicate property ${prop}`)
        target[prop] = entr[prop]
      }
    }
    return this
  }
}
Object_._rel = {
  OR: (a, b) => a || b,
  XOR: (a, b) => (a ? !b : b),
  AND: (a, b) => a && b,
  NAND: (a, b) => !(a && b),
}
