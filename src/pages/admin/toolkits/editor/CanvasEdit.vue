<template>
  <div :class="getClass">
    <BoxEdit
      v-for="(box, i) in boxes"
      :key="i"
      v-model="boxes[i]"
      :box="box"
      :index="i"
      @delete="deleteBox"
    ></BoxEdit>
    <Preview :canvas="template"></Preview>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import BoxEdit from './BoxEdit'
import Preview from './Preview'

export default new Component({
  name: 'CanvasEdit',
  props: {
    canvas: {
      type: Object,
      required: true,
    },
  },
  computed: {
    template() {
      return {
        meta: this.canvas.meta,
        boxes: this.boxes,
      }
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
    Preview,
  },
  methods: {
    deleteBox(index) {
      this.boxes.splice(index, 1)
    },
  },
})
</script>

<style lang="scss" scoped></style>
