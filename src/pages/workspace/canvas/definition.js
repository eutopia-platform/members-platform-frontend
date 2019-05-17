export class Box {
  constructor(x, y, vp) {
    this.pos = {
      x,
      y,
    }
    this.width = 5
    this.height = 5

    this.vp = vp
  }

  render() {
    return {
      x: this.pos.x * 100,
      y: this.pos.y * 100,
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
  }

  setSideRatio(ratio) {
    this.viewport.height = ratio * this.viewport.width
  }

  addBox(x, y) {
    this.boxes.push(new Box(x, y, this.viewport))
  }
}
