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
    <Button @click="addBox">add new box</Button>
    <Preview v-if="boxes.length" :canvas="value"></Preview>
  </div>
</template>

<script>
import Component from '/scripts/component'
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
    value() {
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
        this.$emit('input', this.value)
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
    addBox() {
      this.boxes.push({ x: 0, y: -0.2, w: 0.1, h: 0.1, content: 'new box' })
    },
  },
})
</script>

<style lang="scss" scoped></style>
