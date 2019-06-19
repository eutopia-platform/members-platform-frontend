import { obj, arr, num, str, uuid } from './types'
import { getNested, setNested } from '~/scripts/object'

export default class Toolkit {
  constructor(def, opt) {
    if (!def) return

    if (opt && opt.decode) def = Toolkit._decode(def)

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

  encode() {
    return {
      id: this.id,
      title: this.title,
      description: encodeURI(this.description),
      learning: encodeURI(this.learning),
      workflow: encodeURI(this.workflow),
      canvas: JSON.stringify({
        ...this.canvas,
        ...{
          boxes: this.canvas.boxes.map(box => ({
            ...box,
            ...{ content: encodeURI(box.content) },
          })),
        },
      }),
    }
  }

  static _decode(data) {
    data = typeof data === 'string' ? JSON.parse(data) : Object.assign({}, data)
    if (data.description) data.description = encodeURI(data.description)
    if (data.learning) data.learning = encodeURI(data.learning)
    if (data.workflow) data.workflow = encodeURI(data.workflow)
    if (data.canvas && data.canvas.boxes)
      data.canvas.boxes.forEach(box => (box.content = encodeURI(box.content)))
    return data
  }
}
Toolkit.schema = obj({
  id: uuid(),
  title: str().min(3),
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
