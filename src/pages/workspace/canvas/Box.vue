<template>
  <div :class="getClass" :style="style"></div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import { Box as BoxDef } from './definition'

export default new Component({
  name: 'Box',
  props: {
    def: {
      type: BoxDef,
      required: true,
    },
  },
  computed: {
    style() {
      const frame = this.def.render()
      return {
        left: `${frame.x}%`,
        top: `${frame.y}%`,
        width: `${frame.width}%`,
        height: `${frame.height}%`,
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.box {
  width: 10rem;
  height: 10rem;
  background-color: white;
  box-sizing: border-box;
  border: 1px solid black;
  position: absolute;
}
</style>
