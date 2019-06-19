export const getNested = (obj, ...keys) => {
  if (obj === undefined) return undefined
  if (keys.length === 0) return obj
  return getNested(obj[keys.shift()], ...keys)
}
