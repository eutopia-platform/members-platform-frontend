import { getNested } from './object'

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
