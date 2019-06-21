import Type_ from './type'
import { assert } from '~/scripts/debug'

export default class Array_ extends Type_ {
  constructor() {
    super()
    this._elements = null
    this._every = null
  }

  check(v) {
    if (!Array.isArray(v)) return false
    if (this._elements !== null) {
      if (this._elements.length !== v.length) return false
      return this._elements.every((e, i) => e.check(v[i]))
    }
    if (this._every !== null) {
      const every = this._every
      const check = !Array.isArray(every)
        ? e => every.check(e)
        : e => every.some(c => c.check(e))
      return v.every(e => check(e))
    }
    return true
  }

  elements(elem) {
    if (this._every !== null)
      throw Error("Array_ can't specify elements & every")
    assert(Array.isArray(elem))
    assert(
      elem.every(v => v instanceof Type_),
      'Array_ entries must be children of Type_'
    )
    this._elements = elem
    return this
  }

  every(v) {
    if (this._elements !== null)
      throw Error("Array_ can't specify every & elements")
    assert(
      Array.isArray(v) ? v.every(e => e instanceof Type_) : v instanceof Type_
    )
    this._every = v
    return this
  }
}
