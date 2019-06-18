import Type_ from './type'
import Array_ from './array'
import String_ from './string'
import Number_ from './number'

describe('Array_', () => {
  it('extends Type_', () => {
    expect(new Array_() instanceof Type_).toBe(true)
  })
})

it('accepts any array by default', () => {
  for (const arr of [[], [1, 2], ['', 0, { a: [] }]])
    expect(new Array_().check(arr)).toBe(true)
})

it("rejects any value that isn't an array", () => {
  for (const e of [1, {}, '', { a: [] }])
    expect(new Array_().check(e)).toBe(false)
})

it('correctly checks with elements specified', () => {
  const arr = new Array_().elements([new String_(), new Number_()])
  expect(arr.check(['foo', 123])).toBe(true)
  expect(arr.check([123, 'foo'])).toBe(false)
})

it('correctly checks with every spicified', () => {
  const arr1 = new Array_().every(new Number_())
  expect(arr1.check([1, 2])).toBe(true)
  expect(arr1.check([1, ''])).toBe(false)
  const arr2 = new Array_().every([new String_(), new Number_().integer()])
  expect(arr2.check(['a', 1, 2])).toBe(true)
  expect(arr2.check(['a', 1, 2.1])).toBe(false)
})

it('prevents specifying every & elements', () => {
  expect(() => new Array_().every(new Number_()).elements([])).toThrow()
  expect(() => new Array_().elements([]).every([new String_()])).toThrow()
})

it('checks recursively', () => {
  const arr = new Array_().every([
    new Number_(),
    new Array_().every([new String_(), new Array_()]),
  ])
  expect(arr.check([1, ['foo'], 2])).toBe(true)
  expect(arr.check([1, [2], 3])).toBe(false)
})
