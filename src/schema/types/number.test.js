import Type_ from './type'
import Number_ from './number'

describe('Number_', () => {
  it('extends Type_', () => {
    expect(new Number_() instanceof Type_).toBe(true)
  })

  it('accepts numbers', () => {
    for (const num of [123, -0.25]) {
      expect(new Number_().check(num)).toBe(true)
    }
  })

  it('rejects other values', () => {
    for (const e of ['asdf', {}, new Number()]) {
      expect(new Number_().check(e)).toBe(false)
    }
  })

  it('enforces min & max value', () => {
    for (let i = -5; i < 5; i++) {
      expect(new Number_().min(2).check(i)).toBe(i >= 2)
      expect(new Number_().max(2).check(i)).toBe(i <= 2)
      expect(new Number_().min(-2).check(i)).toBe(i >= -2)
      expect(new Number_().max(-2).check(i)).toBe(i <= -2)
      expect(
        new Number_()
          .min(-2)
          .max(2)
          .check(i)
      ).toBe(i >= -2 && i <= 2)
    }
  })

  it('enforces min <= max', () => {
    expect(() => new Number_().min(10).max(5)).toThrow()
  })

  it('validates min & max argument', () => {
    expect(() => new Number_().min()).toThrow()
    expect(() => new Number_().max({})).toThrow()
  })

  it('validates integer', () => {
    expect(new Number_().integer().check(10)).toBe(true)
    expect(new Number_().integer().check(10.1)).toBe(false)
    expect(
      new Number_()
        .min(5)
        .max(7)
        .integer()
        .check(6)
    ).toBe(true)
    expect(
      new Number_()
        .min(5)
        .max(7)
        .integer()
        .check(8)
    ).toBe(false)
  })
})
