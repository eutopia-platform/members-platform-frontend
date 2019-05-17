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
      x: (this.vp.offX + this.pos.x) * 100,
      y: (this.vp.offY + this.pos.y) * 100,
      width: (this.width / this.vp.width) * 100,
      height: (this.height / this.vp.height) * 100,
    }
  }
}

export class Canvas {
  constructor() {
    this.boxes = []
    this.viewport = {
      width: 100,
      height: 100,
      offX: 0,
      offY: 0,
    }
    this.scrollStep = 0.001
  }

  setSideRatio(ratio) {
    this.viewport.height = ratio * this.viewport.width
  }

  scroll(x, y) {
    this.viewport.offX += x * this.scrollStep * -1
    this.viewport.offY += y * this.scrollStep * -1
  }

  addBox(x, y) {
    this.boxes.push(new Box(x, y, this.viewport))
  }
}
