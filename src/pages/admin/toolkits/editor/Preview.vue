<template>
  <div :class="getClass">
    <Canvas v-if="showCanvas" :template="canvas" :width="width"></Canvas>
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
  data() {
    return {
      width: 500,
      showCanvas: false,
    }
  },
  components: {
    Canvas,
  },
  mounted() {
    this.width = this.$el.offsetWidth
    this.showCanvas = true
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
