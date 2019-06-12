<template>
  <div :class="getClass">
    <Canvas
      v-if="canvas.meta"
      :template="canvas"
      :width="$el.offsetWidth"
    ></Canvas>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import Canvas from '/pages/workspace/canvas/Canvas'

export default new Component({
  name: 'Preview',
  props: {
    canvas: {
      type: Object,
      required: true,
    },
  },
  components: {
    Canvas,
  },
})
</script>

<style lang="scss" scoped>
.preview {
  margin-top: 1rem;

  .canvas {
    height: 80vh;
    background: lightgray;
    overflow: hidden;
    border: 1px solid black;
  }
}
</style>
