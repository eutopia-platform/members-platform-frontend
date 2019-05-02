import Component from './component'
import { assert } from './debug'

export default class Atomic extends Component {
  constructor(def) {
    super(def)
    if (this.components)
      assert(
        () => !Object.keys(def.components).length,
        "atomic component can't include other atomic components"
      )
  }
}
