import { obj, arr, num, str, uuid } from './types'
import { getNested, setNested } from '~/scripts/object'

export default class Toolkit {
  constructor(def) {
    if (!def) return

    const copy = path => {
      const val = getNested(def, ...path.split('.'))
      if (val !== undefined)
        Object.assign(this, setNested(this, val, ...path.split('.')))
    }

    copy('id')
    copy('title')
    copy('description')
    copy('workflow')
    copy('learning')
    copy('visibility')
    copy('canvas.boxes')
    copy('canvas.meta.width')
    copy('canvas.meta.height')
    copy('canvas.meta.spacing')
  }

  get valid() {
    return Toolkit.schema.check(this)
  }
}
Toolkit.schema = obj({
  id: uuid(),
  title: str(),
  description: str(),
  workflow: str(),
  learning: str(),
  visibility: str(),
  canvas: obj({
    meta: obj()
      .optional({ width: num(0), height: num(0) })
      .relation('width XOR height'),
    boxes: arr(obj({ x: num(), y: num(), w: num(), h: num(), content: str() })),
  }),
})
