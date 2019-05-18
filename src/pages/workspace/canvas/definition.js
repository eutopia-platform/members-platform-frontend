export class Box {
  constructor(vp, x, y, w = 10, h = 10) {
    this.pos = {
      x,
      y,
    }
    this.width = w
    this.height = h
    this.vp = vp
  }

  render() {
    return {
      x: (this.pos.x - this.vp.offX) / this.vp.width,
      y: (this.pos.y - this.vp.offY) / this.vp.height,
      width: this.width / this.vp.width,
      height: this.height / this.vp.height,
    }
  }

  move(x, y) {
    this.pos = {
      x: this.vp.offX + this.vp.width * x,
      y: this.vp.offY + this.vp.height * y,
    }
  }

  resize({ width, height }, anchor) {
    const oldDim = { width: this.width, height: this.height }
    this.width = width * this.vp.width
    this.height = height * this.vp.height
    if (anchor.right) this.pos.x -= this.width - oldDim.width
    if (anchor.bottom) this.pos.y -= this.height - oldDim.height
  }
}

export class Canvas {
  constructor() {
    this.viewport = {
      width: 100,
      height: 100,
      offX: 0,
      offY: 0,
    }
    this.boxes = []
    this.scrollMod = 0.05
    this.dragTarget = null
  }

  setSideRatio(ratio) {
    this.viewport.height = ratio * this.viewport.width
  }

  scroll(x, y) {
    this.viewport.offX += x * this.scrollMod * (this.viewport.width / 50) ** 1.1
    this.viewport.offY +=
      y * this.scrollMod * (this.viewport.height / 50) ** 1.1
  }

  zoom(step, target) {
    const mod = step / 100 + 1
    this.viewport.width *= mod
    this.viewport.height *= mod
    this.viewport.offX +=
      (this.viewport.width / mod - this.viewport.width) * target.x
    this.viewport.offY +=
      (this.viewport.height / mod - this.viewport.height) * target.y
  }

  addBox(x, y) {
    x = this.viewport.offX + x * this.viewport.width
    y = this.viewport.offY + y * this.viewport.height
    this.boxes.push(new Box(this.viewport, x, y))
  }
}
