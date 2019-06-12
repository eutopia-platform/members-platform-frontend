<template>
  <div :class="getClass">
    {{ canvas.meta }}
    <LabeledInput
      v-if="canvas && canvas.meta"
      v-model="canvas.meta.width"
      label="width"
      :default-value="canvas.meta.width.toString()"
    ></LabeledInput>
    <LabeledInput
      v-if="canvas && canvas.meta"
      v-model="canvas.meta.spacing"
      label="spacing"
      :default-value="canvas.meta.spacing.toString()"
    ></LabeledInput>
    <BoxEdit
      v-for="(box, i) in boxes"
      :key="i"
      v-model="boxes[i]"
      :box="box"
      :index="i"
      @delete="deleteBox"
    ></BoxEdit>
    <Preview v-if="boxes.length" :canvas="template"></Preview>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import BoxEdit from './BoxEdit'
import Preview from './Preview'
import LabeledInput from '/components/molecular/LabeledInput'

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
    LabeledInput,
  },
  methods: {
    deleteBox(index) {
      this.boxes.splice(index, 1)
    },
  },
})
</script>

<style lang="scss" scoped></style>
