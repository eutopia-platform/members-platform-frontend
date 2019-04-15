import Component from './component'
import { assert } from '/components/sharedScripts/debug'

export default class Molecular extends Component {
  constructor(def) {
    super(def)

    // add atomic components to components
    if (def.atomic) {
      if (!this.components) this.components = {}
      this.components = Object.assign(this.components, def.atomic.map(c => [c.default.name, c.default]).reduce((a, b) => {
        a[b[0]] = b[1]
        return a
      }, {}))
    }
  }
}
