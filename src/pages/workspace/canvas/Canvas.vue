<template>
  <div :class="getClass" @dragover="e => e.preventDefault()" @drop="handleDrop">
    <Toolbar></Toolbar>
    <Box
      v-for="box in def.boxes"
      :key="def.boxes.indexOf(box)"
      :parent-width="width"
      :parent-height="height"
      :def="box"
    >
      {{ box.content }}
    </Box>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import Box from './Box'
import Toolbar from './Toolbar'
import { Canvas } from './definition'
import Template from './template'
import customerJourney from './templates/customerJourney'

export default new Component({
  name: 'Canvas',
  components: {
    Box,
    Toolbar,
  },
  data: {
    def: new Canvas(),
    sideRatio: 1,
    height: window.innerHeight,
  },
  props: {
    width: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    sideRatio(n) {
      this.def.setSideRatio(n)
    },
    width() {
      this.onResize()
    },
  },
  methods: {
    handleDrop(e) {
      if (
        e.target !== this.$el ||
        e.dataTransfer.getData('text/plain') !== 'box'
      )
        return
      let { clientX: x, clientY: y } = e
      this.createBox(x, y)
    },
    createBox(x, y) {
      x -= this.$el.offsetLeft
      y -= this.$el.offsetTop
      x /= this.$el.offsetWidth
      y /= this.$el.offsetHeight
      this.def.addBox(x, y)
    },
    onResize() {
      this.height = this.$el.offsetHeight
      this.sideRatio = this.$el.offsetHeight / this.$el.offsetWidth
      this.def.setSideRatio(this.setSideRatio)
    },
    onWheel(e) {
      if (e.ctrlKey)
        this.pinch(e.deltaY, {
          x: (e.clientX - this.$el.offsetLeft) / this.$el.offsetWidth,
          y: (e.clientY - this.$el.offsetTop) / this.$el.offsetHeight,
        })
      else this.scroll(e.deltaX, e.deltaY)
      e.preventDefault()
    },
    onMouseDown(e) {
      if (e.target === this.$el) return
      const boxes = this.$children.filter(
        child => child.$options.name === 'Box'
      )
      const target = boxes.find(
        box => box.$el === e.target || box.$el === e.target.parentNode
      )
      if (target) {
        if (e.target.className.includes('box')) {
          this.dragTarget = {
            el: target,
            off: {
              x: e.clientX - this.$el.offsetLeft - target.$el.offsetLeft,
              y: e.clientY - this.$el.offsetTop - target.$el.offsetTop,
            },
          }
          this.$el.addEventListener('mousemove', this.onDrag)
        } else if (e.target.className.includes('resize')) {
          this.resizeTarget = {
            el: target,
            resSide: e.target.className
              .split(' ')
              .find(name => name.includes('res-'))
              .replace('res-', ''),
          }
          this.$el.addEventListener('mousemove', this.onBoxResize)
        }
      }
    },
    onMouseUp() {
      this.dragTarget = null
      this.resizeTarget = null
      this.$el.removeEventListener('mousemove', this.onDrag)
      this.$el.removeEventListener('mousemove', this.onBoxResize)
    },
    onDrag({ clientX: x, clientY: y }) {
      this.dragTarget.el.def.move(
        (x - this.dragTarget.off.x - this.$el.offsetLeft) /
          this.$el.offsetWidth,
        (y - this.dragTarget.off.y - this.$el.offsetTop) / this.$el.offsetHeight
      )
    },
    onBoxResize({ clientX: x, clientY: y }) {
      let dim = {
        width: this.resizeTarget.el.$el.offsetWidth / this.$el.offsetWidth,
        height: this.resizeTarget.el.$el.offsetHeight / this.$el.offsetHeight,
      }
      let anchor = {
        bottom: false,
        right: false,
      }
      switch (this.resizeTarget.resSide) {
        case 'right':
          dim.width =
            (x - this.$el.offsetLeft - this.resizeTarget.el.$el.offsetLeft) /
            this.$el.offsetWidth
          break
        case 'bottom':
          dim.height =
            (y - this.$el.offsetTop - this.resizeTarget.el.$el.offsetTop) /
            this.$el.offsetHeight
          break
        case 'left':
          anchor.right = true
          dim.width =
            (this.resizeTarget.el.$el.offsetLeft +
              this.resizeTarget.el.$el.offsetWidth -
              (x - this.$el.offsetLeft)) /
            this.$el.offsetWidth
          break
        case 'top':
          anchor.bottom = true
          dim.height =
            (this.resizeTarget.el.$el.offsetTop +
              this.resizeTarget.el.$el.offsetHeight -
              (y - this.$el.offsetTop)) /
            this.$el.offsetHeight
          break
      }

      this.resizeTarget.el.def.resize(dim, anchor)
      this.resizeTarget.el.updateLayout()
    },
    scroll(x, y) {
      this.def.scroll(x, y)
    },
    pinch(step, target) {
      this.def.zoom(step, target)
    },
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
    this.$el.addEventListener('wheel', this.onWheel)
    this.$el.addEventListener('mousedown', this.onMouseDown)
    this.$el.addEventListener('mouseup', this.onMouseUp)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
    this.$el.removeEventListener('wheel', this.onWheel)
    this.$el.removeEventListener('mousedown', this.onMouseDown)
    this.$el.removeEventListener('mouseup', this.onMouseUp)
  },
  created() {
    this.def.loadTemplate(new Template(this.def.viewport, customerJourney))
  },
})
</script>

<style lang="scss" scoped>
.canvas {
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
}
</style>
