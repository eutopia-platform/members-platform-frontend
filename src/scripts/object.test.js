import { getNested, setNested } from './object'

describe('getNested', () => {
  const obj = {
    a: {
      b: {
        c: 'foo',
      },
    },
    d: {
      e: 'bar',
    },
  }

  it('returns value with correct path', () => {
    expect(getNested(obj, 'a', 'b', 'c')).toBe('foo')
    expect(getNested(obj, 'd', 'e')).toBe('bar')
    expect(getNested(obj, 'a', 'b')).toEqual({ c: 'foo' })
  })

  it('returns the original object without path', () => {
    expect(getNested(obj)).toBe(obj)
  })

  it('returns undefined for paths that are not in the object', () => {
    expect(getNested(obj, 'f', 'o', 'o')).toBe(undefined)
    expect(getNested(obj, 'a', 'b', 'c', 'd')).toBe(undefined)
  })
})

describe('setNested', () => {
  const obj = {
    a: {
      b: {
        c: 'foo',
      },
    },
  }
  const obj2 = {
    a: {
      b: {
        c: 'foo',
      },
    },
    d: {
      e: 'bar',
    },
  }
  const obj3 = {
    a: {
      b: {
        c: 'foo',
      },
      d: {
        e: 'bar',
      },
    },
  }

  it('constructs the correct object', () => {
    expect(setNested({}, 'foo', 'a', 'b', 'c')).toEqual(obj)
  })

  it("doesn't remove other properties", () => {
    expect(setNested({ d: { e: 'bar' } }, 'foo', 'a', 'b', 'c')).toEqual(obj2)
  })

  it("doesn't remove properties that are in path", () => {
    expect(setNested({ a: { d: { e: 'bar' } } }, 'foo', 'a', 'b', 'c')).toEqual(
      obj3
    )
  })
})
