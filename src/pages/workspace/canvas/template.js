import { assert } from '/components/sharedScripts/debug'
import { Box } from './definition'

export default class Template {
  constructor(vp, template) {
    this.boxes = this.buildTemplate(template, vp).boxes.map(
      box => new Box(vp, ...box)
    )
  }

  buildTemplate(template, vp) {
    assert(
      () =>
        'meta' in template &&
        ('width' in template.meta || 'height' in template.meta),
      'template needs to specify width or height'
    )

    const offLeft = Math.min(...template.boxes.map(box => box.x))
    const offTop = Math.min(...template.boxes.map(box => box.y))
    const scale =
      'width' in template.meta
        ? (template.meta.width * vp.width) /
          Math.max(...template.boxes.map(box => box.w - offLeft))
        : (template.meta.height * vp.height) /
          Math.max(...template.boxes.map(box => box.h - offTop))
    const spacing = template.meta.spacing || 0
    vp.offX =
      -(
        vp.width -
        Math.max(...template.boxes.map(box => box.w - offLeft)) * scale
      ) / 2

    return {
      boxes: template.boxes.map(box => [
        (box.x + spacing / 2) * scale,
        (box.y + spacing / 2) * scale,
        (box.w - spacing) * scale,
        (box.h - spacing) * scale,
        box.content,
      ]),
    }
  }
}
