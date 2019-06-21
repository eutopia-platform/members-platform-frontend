import Type_ from './type'
import UUID_ from './uuid'

const uuids = [
  '84b4c032-91ed-11e9-bc42-526af7764f64',
  'fd4c8b63-bff7-4496-92bd-7526d1849220',
]

describe('UUID_', () => {
  it('extends Type_', () => {
    expect(new UUID_() instanceof Type_).toBe(true)
  })

  it('accepts uuids', () => {
    for (const uuid of uuids) expect(new UUID_().check(uuid)).toBe(true)
  })

  it('rejects other values', () => {
    for (const e of [123, {}, ['asdf'], new String()])
      expect(new UUID_().check(e)).toBe(false)
  })
})
