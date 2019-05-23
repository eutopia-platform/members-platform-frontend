import { assert } from './debug'

export const parseLength = length => {
  assert(
    () =>
      typeof length === 'number' ||
      ['px', 'vw', 'rem'].some(unit => length.includes(unit)),
    `can't parse ${length}`
  )
  if (typeof length === 'number') return length
  if (length.includes('px')) return parseInt(length, 10)
  if (length.includes('vw'))
    return (parseInt(length, 10) / 100) * window.innerWidth
  if (length.includes('rem'))
    parseInt(length, 10) *
      parseFloat(getComputedStyle(document.documentElement).fontSize)
}
