import Type_ from './type'
import String_ from './string'

describe('String_', () => {
  it('extends Type_', () => {
    expect(new String_() instanceof Type_).toBe(true)
  })

  it('accepts strings', () => {
    for (const str of ['', 'lorem ipsum', '_$ä0123\n']) {
      expect(new String_().check(str)).toBe(true)
    }
  })

  it('rejects other values', () => {
    for (const e of [123, {}, ['asdf'], new String()])
      expect(new String_().check(e)).toBe(false)
  })

  it('enforces min & max length', () => {
    for (let i = 0; i < 10; i++) {
      expect(new String_().min(5).check(' '.repeat(i))).toBe(i >= 5)
      expect(new String_().max(5).check(' '.repeat(i))).toBe(i <= 5)
      expect(
        new String_()
          .min(2)
          .max(8)
          .check(' '.repeat(i))
      ).toBe(i >= 2 && i <= 8)
    }
  })

  it('enforces min <= max', () => {
    expect(() => new String_().min(10).max(5)).toThrow()
  })

  it('validates min & max argument', () => {
    expect(() => new String_().min('')).toThrow()
    expect(() => new String_().max()).toThrow()
    expect(() => new String_().min()).toThrow()
    expect(() => new String_().min(-1)).toThrow()
  })
})
