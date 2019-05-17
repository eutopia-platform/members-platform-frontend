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
    onClick({ clientX: x, clientY: y }) {
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
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
    this.$el.removeEventListener('wheel', this.onWheel)
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
