<template>
  <div :class="getClass">
    <Canvas></Canvas>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import Canvas from './canvas/Canvas'

export default new Component({
  name: 'CanvasTest',
  components: {
    Canvas,
  },
})
</script>

<style lang="scss" scoped>
.canvas-test {
  padding: 0 !important;
  height: 100vh;
}
</style>
