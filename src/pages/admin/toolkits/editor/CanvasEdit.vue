<template>
  <div :class="getClass">
    <Loader v-if="value === null"></Loader>
    <template v-else>
      <LabeledInput
        v-model="value.meta.width"
        label="width"
        :default-value="value.meta.width.toString()"
      ></LabeledInput>
      <LabeledInput
        v-model="value.meta.spacing"
        label="spacing"
        :default-value="value.meta.spacing.toString()"
      ></LabeledInput>
      <BoxEdit
        v-for="(box, i) in value.boxes"
        :key="i"
        v-model="value.boxes[i]"
        :box="box"
        :index="i"
        @delete="deleteBox"
      ></BoxEdit>
      <Button outlined @click="addBox">add new box</Button>
      <Canvas></Canvas>
    </template>
  </div>
</template>

<script>
import Component from '~/scripts/component'
import BoxEdit from './BoxEdit'
import LabeledInput from '~/components/molecular/LabeledInput'
import Canvas from '~/pages/workspace/canvas/Canvas'

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
      value: null,
    }
  },
  watch: {
    value: {
      deep: true,
      handler() {
        this.$emit('input', this.value)
      },
    },
  },
  created() {
    this.value = Object.assign({}, this.canvas)
  },
  components: {
    BoxEdit,
    LabeledInput,
    Canvas,
  },
  methods: {
    deleteBox(index) {
      this.value.boxes.splice(index, 1)
    },
    addBox() {
      this.value.boxes.push({
        x: 0,
        y: -0.2,
        w: 0.1,
        h: 0.1,
        content: 'new box',
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.canvas-edit {
  .canvas {
    width: 100%;
    height: 30rem;
    border: 1px solid black;
    background: gray;
    overflow: hidden;
  }
}
</style>
