export class Box {
  constructor(x, y, vp) {
    this.pos = {
      x,
      y,
    }
    this.width = 10
    this.height = 10

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
}

export class Canvas {
  constructor() {
    this.viewport = {
      width: 50,
      height: 50,
      offX: 0,
      offY: 0,
    }
    this.boxes = [new Box(20, 10, this.viewport)]
    this.scrollMod = 0.05
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
    this.boxes.push(new Box(x, y, this.viewport))
  }
}
