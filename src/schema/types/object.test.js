import Type_ from './type'
import Object_ from './object'
import String_ from './string'
import Number_ from './number'

describe('Object_', () => {
  it('extends Type_', () => {
    expect(new Object_() instanceof Type_).toBe(true)
  })

  it('accepts children of Type_ as entries', () => {
    expect(() =>
      new Object_().entries({
        a: new String_(),
        b: new Number_(),
        c: new Object_(),
      })
    ).not.toThrow()
  })

  it("rejects entries that aren't children of Type_", () => {
    for (let e of [1, '', {}])
      expect(() => new Object_().entries({ a: e })).toThrow()
  })

  it('correctly checks definition', () => {
    expect(
      new Object_().entries({ str: new String_(), num: new Number_() }).check({
        str: 'foo',
        num: 123,
      })
    ).toBe(true)

    expect(
      new Object_().entries({ str: new String_(), num: new Number_() }).check({
        a: 1,
        b: 2,
      })
    ).toBe(false)

    expect(
      new Object_().entries({ str: new String_(), num: new Number_() }).check({
        str: 123,
        num: 'foo',
      })
    ).toBe(false)
  })

  it('checks correct structure recursively', () => {
    const def = {
      a: new Object_().entries({
        b: new Object_().entries({
          b1: new String_(),
        }),
        c: new Object_().entries({
          c1: new Object_().entries({
            c2: new Number_(),
          }),
        }),
      }),
    }

    expect(
      new Object_().entries(def).check({
        a: {
          b: {
            b1: 'foo',
          },
          c: {
            c1: {
              c2: 123,
            },
          },
        },
      })
    ).toBe(true)

    expect(
      new Object_().entries(def).check({ a: { b: { b1: 'asdf' }, c: {} } })
    ).toBe(false)
  })

  it('prevents overwriting entries', () => {
    expect(() =>
      new Object_().entries({ a: new String_() }).entries({ a: new Number_() })
    ).toThrow()
  })

  it('detects missing property', () => {
    const obj = new Object_().entries({ a: new String_(), b: new String_() })
    expect(obj.check({ a: 'a', b: 'b' })).toBe(true)
    expect(obj.check({ a: 'a' })).toBe(false)
  })

  it('checks optional properties', () => {
    const obj = new Object_()
      .entries({ a: new String_() })
      .optional({ b: new String_() })
    expect(obj.check({ a: 'a' })).toBe(true)
    expect(obj.check({ a: 'a', b: 'b' })).toBe(true)
    expect(obj.check({ a: 'a', b: 0 })).toBe(false)
  })

  it('allows additional properties without exclusive', () => {
    const obj = new Object_()
      .entries({ a: new Number_() })
      .optional({ b: new Number_() })

    expect(obj.check({ a: 0, b: 1 })).toBe(true)
    expect(obj.check({ a: 0, b: 1, c: 2 })).toBe(true)
  })

  it('correctly checks with exclusive', () => {
    const obj = new Object_()
      .entries({ a: new Number_() })
      .optional({ b: new Number_() })
      .exclusive()

    expect(obj.check({ a: 0, b: 1 })).toBe(true)
    expect(obj.check({ a: 0, b: 1, c: 2 })).toBe(false)
  })

  it('correctly checks relations', () => {
    const OR = new Object_().relation('a OR b')
    const XOR = new Object_().relation('a XOR b')
    const AND = new Object_().relation('a AND b')
    const NAND = new Object_().relation('a NAND b')
    const def00 = {}
    const def10 = { a: 'a' }
    const def01 = { b: 'b' }
    const def11 = { a: 'a', b: 'b' }

    expect(OR.check(def00)).toBe(false)
    expect(OR.check(def10)).toBe(true)
    expect(OR.check(def01)).toBe(true)
    expect(OR.check(def11)).toBe(true)

    expect(XOR.check(def00)).toBe(false)
    expect(XOR.check(def10)).toBe(true)
    expect(XOR.check(def01)).toBe(true)
    expect(XOR.check(def11)).toBe(false)

    expect(AND.check(def00)).toBe(false)
    expect(AND.check(def10)).toBe(false)
    expect(AND.check(def01)).toBe(false)
    expect(AND.check(def11)).toBe(true)

    expect(NAND.check(def00)).toBe(true)
    expect(NAND.check(def10)).toBe(true)
    expect(NAND.check(def01)).toBe(true)
    expect(NAND.check(def11)).toBe(false)
  })
})
