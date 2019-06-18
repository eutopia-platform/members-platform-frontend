import Type_ from './type'
import { isUUID } from '~/scripts/validate'

export default class UUID_ extends Type_ {
  static check(v) {
    return isUUID(v)
  }
}
