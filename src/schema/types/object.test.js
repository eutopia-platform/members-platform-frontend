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
})
