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
      template.hasOwnProperty('width') || template.hasOwnProperty('height'),
      'template needs to specify width or height'
    )
    const offLeft = Math.min(...template.boxes.map(box => box[0]))
    const offTop = Math.min(...template.boxes.map(box => box[1]))
    const scale = template.hasOwnProperty('width')
      ? (template.width * vp.width) /
        Math.max(...template.boxes.map(box => box[2] - offLeft))
      : (template.height * vp.height) /
        Math.max(...template.boxes.map(box => box[3] - offTop))
    const spacing = template.spacing || 0
    return {
      boxes: template.boxes.map(box => [
        (box[0] + spacing / 2) * scale,
        (box[1] + spacing / 2) * scale,
        (box[2] - spacing) * scale,
        (box[3] - spacing) * scale,
      ]),
    }
  }
}
