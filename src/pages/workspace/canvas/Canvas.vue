<template>
  <div :class="getClass" @click="onClick">
    <Box
      v-for="box in def.boxes"
      :key="def.boxes.indexOf(box)"
      :def="box"
    ></Box>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import Box from './Box'
import { Canvas } from './definition'

export default new Component({
  name: 'Canvas',
  components: {
    Box,
  },
  data: {
    def: new Canvas(),
    sideRatio: 1,
  },
  watch: {
    sideRatio(n) {
      this.def.setSideRatio(n)
    },
  },
  methods: {
    onClick(e) {
      if (e.target !== this.$el) return
      let { clientX: x, clientY: y } = e
      x -= this.$el.offsetLeft
      y -= this.$el.offsetTop
      x /= this.$el.offsetWidth
      y /= this.$el.offsetHeight
      this.def.addBox(x, y)
    },
    onResize() {
      this.sideRatio = this.$el.offsetHeight / this.$el.offsetWidth
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
      const target = this.$children
        .filter(child => child.$options.name === 'Box')
        .find(box => box.$el === e.target)
      if (target) {
        this.dragTarget = target
        this.$el.addEventListener('mousemove', this.onDrag)
      }
    },
    onMouseUp() {
      this.dragTarget = null
      this.$el.removeEventListener('mousemove', this.onDrag)
    },
    onDrag({ clientX: x, clientY: y }) {
      this.dragTarget.def.move(
        (x - this.$el.offsetLeft) / this.$el.offsetWidth,
        (y - this.$el.offsetTop) / this.$el.offsetHeight
      )
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
