<template>
  <div :class="getClass">
    <BoxEdit
      v-for="(box, i) in boxes"
      :key="i"
      v-model="boxes[i]"
      :box="box"
      :index="i"
    ></BoxEdit>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import BoxEdit from './BoxEdit'

export default new Component({
  name: 'CanvasEdit',
  props: {
    canvas: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      boxes: this.canvas.boxes.map(box => Object.assign({}, box)),
    }
  },
  watch: {
    canvas: {
      handler(v) {
        this.boxes = v.boxes.map(box => Object.assign({}, box))
      },
      deep: true,
    },
  },
  components: {
    BoxEdit,
  },
})
</script>

<style lang="scss" scoped></style>
