export const getNested = (obj, ...keys) => {
  if (obj === undefined) return undefined
  if (keys.length === 0) return obj
  return getNested(obj[keys.shift()], ...keys)
}

export const setNested = (obj, value, ...keys) => {
  if (keys.length === 0) return value
  return {
    ...(obj !== undefined && obj),
    ...{
      [keys[0]]: setNested(obj[keys[0]] || {}, value, ...keys.slice(1)),
    },
  }
}
