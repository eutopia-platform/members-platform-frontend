export default class Baseline {
  show() {
    this.canvas = document.body.appendChild(document.createElement('canvas'))
    this.ctx = this.canvas.getContext('2d')
    this.render()
    window.addEventListener('resize', () => this.render())
  }

  render() {
    if (!this.canvas) return
    this.canvas.setAttribute(
      'style',
      `position: absolute; top: 0; left: 0; width: 100vw; height: ${
        document.querySelector('.app').offsetHeight
      }px;`
    )
    this.canvas.width = document.querySelector('.app').offsetWidth
    this.canvas.height = document.querySelector('.app').offsetHeight

    const step = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--baseline')
    )

    const drawLines = (i = 0) => {
      if (i * step > this.canvas.height) return
      this.ctx.strokeStyle = i % 2 !== 0 ? '#555' : '#f55a'
      this.ctx.beginPath()
      this.ctx.moveTo(0, i * step + step / 4)
      this.ctx.lineTo(this.canvas.width, i * step + step / 4)
      this.ctx.stroke()
      drawLines(i + 1)
    }

    drawLines()
  }
}
