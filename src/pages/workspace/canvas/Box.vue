<template>
  <div :class="getClass" :style="style" @click="setActive(true)">
    <div ref="content" :style="scaleContent" class="content">
      <Component
        :is="contentDisplay"
        ref="contentDisplay"
        v-model="content"
        :markdown="content"
        @blur="setActive(false)"
      ></Component>
    </div>
    <div class="inner"></div>
    <div class="resize res-left"></div>
    <div class="resize res-right"></div>
    <div class="resize res-top"></div>
    <div class="resize res-bottom"></div>
  </div>
</template>

<script>
import Component from '/scripts/component'
import MarkdownDisplay from '/components/molecular/MarkdownDisplay'
import Textedit from '/components/molecular/Textedit'
import { Box as BoxDef } from './definition'

export default new Component({
  name: 'Box',
  components: {
    MarkdownDisplay,
    Textedit,
  },
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
  },
  data() {
    return {
      content: decodeURI(this.def.content),
      contentDisplay: 'MarkdownDisplay',
    }
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
      const scale = this.$el
        ? 0.1 / (this.def.width / this.$el.offsetWidth)
        : this.def.vp.initialWidth / this.def.vp.width
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
    setActive(focus) {
      if (this.def.isMoving) {
        this.def.isMoving = false
        return
      }
      if (!focus) {
        this.contentDisplay = 'MarkdownDisplay'
        this.$refs.content.style.pointerEvents = 'none'
      } else {
        this.contentDisplay = 'Textedit'
        const text = this.content
        this.$nextTick(() => {
          this.$refs.content.style.pointerEvents = 'initial'
          this.$refs.contentDisplay.$el.focus()
          this.$refs.contentDisplay.$el.value = text
        })
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@import '/styles/shadows';
@import '/styles/text';

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
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
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
