<template>
  <div :class="getClass">
    <BoxEdit v-for="(box, i) in canvas.boxes" :key="i" :box="box" :index="i"></BoxEdit>
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
  components: {
    BoxEdit,
  },
})
</script>

<style lang="scss" scoped>
</style>
