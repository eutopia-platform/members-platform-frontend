import Type_ from './type'
import String_ from './string'
import Number_ from './number'
import Object_ from './object'
import Array_ from './array'
import UUID_ from './uuid'

const obj = entries =>
  entries === undefined ? new Object_() : new Object_().entries(entries)

const arr = every =>
  every === undefined ? new Array_() : new Array_().every(every)

const num = (min = null, max = null) => new Number_().min(min).max(max)

const int = (min = null, max = null) => num(min, max).integer()

const str = () => new String_()

const uuid = () => new UUID_()

export {
  Type_,
  String_,
  Number_,
  Object_,
  Array_,
  UUID_,
  obj,
  arr,
  num,
  int,
  str,
  uuid,
}
