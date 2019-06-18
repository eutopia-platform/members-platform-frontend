import Type_ from './type'
import { assert } from '~/scripts/debug'

export default class Object_ extends Type_ {
  constructor() {
    super()
    this._entries = {}
  }

  check(v) {
    if (typeof v !== 'object') return false
    if (!haveSameKeys(v, this._entries)) return false
    return Object.keys(this._entries).every(key =>
      this._entries[key].check(v[key])
    )
  }

  entries(entr) {
    assert(typeof entr === 'object')
    assert(
      Object.values(entr).every(v => v instanceof Type_),
      'Object_ entries must be children of Type_'
    )
    for (const prop in entr) {
      if (entr.hasOwnProperty(prop)) {
        if (prop in this._entries) throw Error(`duplicate property ${prop}`)
        this._entries[prop] = entr[prop]
      }
    }
    return this
  }
}

const haveSameKeys = (obj1, obj2) => {
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false
  const keys1 = Object.keys(obj1)
    .slice()
    .sort()
  const keys2 = Object.keys(obj2)
    .slice()
    .sort()
  if (keys1.length !== keys2.length) return false
  for (const i in keys1) if (keys1[i] !== keys2[i]) return false
  return true
}
