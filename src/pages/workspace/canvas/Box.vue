<template>
  <div :class="getClass" :style="style">
    <div ref="content" :style="scaleContent" class="content">
      <pre><slot></slot></pre>
      <!-- <MarkdownDisplay :markdown="content"></MarkdownDisplay> -->
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
import MarkdownDisplay from '/components/molecular/MarkdownDisplay'
import { Box as BoxDef } from './definition'

export default new Component({
  name: 'Box',
  props: {
    def: {
      type: BoxDef,
      required: true,
    },
    parentWidth: {
      type: Number,
      required: true,
    },
    parentHeight: {
      type: Number,
      required: true,
    },
    content: {
      type: String,
      default: '## Header 2',
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
      const scale = this.def.vp.initialWidth / this.def.vp.width

      return {
        transform: `scale(${scale})`,
        width: `${((this.def.width / this.def.vp.width) * this.parentWidth) /
          scale}px`,
        height: `${((this.def.height / this.def.vp.height) *
          this.parentHeight) /
          scale}px`,
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
  components: {
    MarkdownDisplay,
  },
})
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/shadows';
@import '/components/sharedStyles/text';

.box {
  width: 10rem;
  height: 10rem;
  background-color: white;
  box-sizing: border-box;
  position: absolute;
  padding: 0;
  cursor: grab;
  overflow: hidden;

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

    pre {
      font-family: $font-primary;
      white-space: pre-wrap;
    }
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
