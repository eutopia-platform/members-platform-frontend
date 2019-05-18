<template>
  <div :class="getClass" :style="style">
    <div class="inner"></div>
    <div class="resize res-left"></div>
    <div class="resize res-right"></div>
    <div class="resize res-top"></div>
    <div class="resize res-bottom"></div>
  </div>
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
        left: `${frame.x * 100}%`,
        top: `${frame.y * 100}%`,
        width: `${frame.width * 100}%`,
        height: `${frame.height * 100}%`,
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/shadows';

.box {
  width: 10rem;
  height: 10rem;
  background-color: white;
  box-sizing: border-box;
  position: absolute;
  resize: both;
  box-shadow: $shadow-default;
  cursor: grab;

  $res-margin: 0.2rem;

  .resize {
    background-color: transparent;
    position: absolute;
  }

  .res-left,
  .res-right {
    height: 100%;
    width: $res-margin;
    top: 0;
    cursor: ew-resize;
  }

  .res-top,
  .res-bottom {
    width: 100%;
    height: $res-margin;
    cursor: ns-resize;
  }

  .res-top {
    top: 0;
  }

  .res-bottom {
    bottom: 0;
  }

  .res-left {
    left: 0;
  }

  .res-right {
    right: 0;
  }
}
</style>
