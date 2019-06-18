import { assert } from '~/scripts/debug'
import { isUUID } from '~/scripts/validate'

export default class Schema {
  constructor(def) {
    if (!Schema._types)
      Schema._types = new Map([
        [Boolean, value => typeof value === 'boolean'],
        [Number, value => typeof value === 'number'],
        [String, value => typeof value === 'string'],
        [Array, value => Array.isArray(value)],
        [Object, value => typeof value === 'object' && !Array.isArray(value)],
        [Function, value => typeof value === 'function'],
        [UUID, value => isUUID(value)],
      ])
    assert(() => def !== undefined, 'missing schema definition')
    assert(() => Schema._types.get(Object)(def), 'invalid schema definition')
    const types = Array.from(Schema._types.keys())
    assert(
      () => Object.values(def).every(v => types.includes(v)),
      'invalid schema',
      true
    )
    this._def = Object.assign({}, def)
  }

  check(obj) {
    if (!Schema._types.get(Object)(obj)) return false
    if (!isEqualArray(Object.keys(obj), Object.keys(this._def))) return false
    for (const p in obj)
      if (!Schema._types.get(this._def[p])(obj[p])) return false
    return true
  }
}

export class UUID {}

const isEqualArray = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false
  arr1 = arr1.slice().sort()
  arr2 = arr2.slice().sort()
  for (const i in arr1.length) if (arr1[i] !== arr2[i]) return false
  return true
}
