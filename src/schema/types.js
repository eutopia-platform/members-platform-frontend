import { assert } from '~/scripts/debug'

export class Type_ {
  constructor() {}
}

export class String_ extends Type_ {
  constructor() {
    super()
    this._min = null
    this._max = null
  }

  check(v) {
    if (typeof v !== 'string') return false
    if (this._min !== null && v.length < this._min) return false
    if (this._max !== null && v.length > this._max) return false
    return true
  }

  min(n) {
    assert(typeof n === 'number' && n >= 0, 'must be positive number')
    assert(this._max === null || n <= this._max, 'must be <= max')
    this._min = n
    return this
  }

  max(n) {
    assert(typeof n === 'number' && n >= 0, 'must be positive number')
    assert(this._min === null || n >= this._min, 'must be >= min')
    this._max = n
    return this
  }
}

export class Number_ extends Type_ {
  constructor() {
    super()
    this._min = null
    this._max = null
    this._integer = false
  }

  check(v) {
    if (typeof v !== 'number') return false
    if (this._min !== null && v < this._min) return false
    if (this._max !== null && v > this._max) return false
    if (this._integer && !Number.isInteger(v)) return false
    return true
  }

  min(n) {
    assert(typeof n === 'number', 'must be number')
    assert(this._max === null || n <= this._max, 'must be <= max')
    this._min = n
    return this
  }

  max(n) {
    assert(typeof n === 'number', 'must be number')
    assert(this._min === null || n >= this._min, 'must be >= min')
    this._max = n
    return this
  }

  integer() {
    this._integer = true
    return this
  }
}
