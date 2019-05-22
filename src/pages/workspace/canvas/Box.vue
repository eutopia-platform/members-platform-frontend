<template>
  <div :class="getClass" :style="style">
    <div ref="content" :style="scaleContent" class="content">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
      veritatis. Culpa, natus delectus. Illum consequuntur, dolorum
      exercitationem commodi iste explicabo nihil, consectetur dolorem assumenda
      porro perferendis minima optio nobis odio!
    </div>
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
    scaleContent() {
      const scale = 100 / this.def.vp.height
      return {
        ...(this.$el && {
          transform: `scale(${scale})`,
          width: `${this.$el.offsetWidth / scale}px`,
          height: `${this.$el.offsetHeight / scale}px`,
        }),
      }
    },
  },
  methods: {
    updateLayout() {
      this.$el.style = {
        ...this.$el,
        ...this.scaleContent,
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
  box-shadow: $shadow-default;
  padding: 0;
  cursor: grab;

  .content {
    padding: 1rem;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow: scroll;
    pointer-events: none;
    user-select: none;
    transform-origin: center;
    transform-origin: left top;
  }

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
