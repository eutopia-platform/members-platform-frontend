import { assert } from '~/scripts/debug'
import { Type_ } from './types'

export default class Schema {
  constructor(def) {
    assert(() => def !== undefined, 'missing schema definition', true)
    assert(
      () =>
        typeof def === 'object' &&
        Object.values(def).every(v => v instanceof Type_),
      'invalid schema definition',
      true
    )
    this._def = Object.assign({}, def)
  }

  check(payload) {
    if (typeof payload !== 'object') return false
    if (!haveSameKeys(payload, this._def)) return false
    return Object.entries(this._def).every(e => e[1].check(payload[e[0]]))
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
