<template>
  <div :class="getClass">
    <div class="center" :style="centerWidth">
      <TitleBar ref="titlebar" :style="titleBarWidth"></TitleBar>
      <Canvas :style="canvasPos" :width="canvasWidth"></Canvas>
    </div>
    <Sidebar
      ref="sidebar"
      right
      collapsable
      @changeWidth="updateSidebarWidth"
    ></Sidebar>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import Canvas from './canvas/Canvas'
import Sidebar from '/components/molecular/Sidebar'
import TitleBar from './canvas/TitleBar'
import { parseLength } from '/components/sharedScripts/parseCSS'

export default new Component({
  name: 'CanvasTest',
  components: {
    Canvas,
    Sidebar,
    TitleBar,
  },
  data: {
    sidebarWidth: 0,
    titlebarHeight: 0,
  },
  props: {
    offsetLeft: {
      type: Number | String,
      required: true,
    },
  },
  computed: {
    navbarWidth() {
      return parseLength(this.offsetLeft)
    },
    canvasWidth() {
      return (
        window.innerWidth -
        parseLength(this.offsetLeft) -
        parseLength(this.sidebarWidth)
      )
    },

    centerWidth() {
      return {
        width: `calc(100% - ${this.sidebarWidth})`,
      }
    },
    titleBarWidth() {
      return {
        width: `calc(100% - ${this.sidebarWidth} - ${this.offsetLeft})`,
      }
    },
    canvasPos() {
      return {
        top: `${this.titlebarHeight}px`,
        height: `calc(100% - ${this.titlebarHeight}px)`,
      }
    },
  },
  methods: {
    updateSidebarWidth(width) {
      this.sidebarWidth = width
    },
  },
  mounted() {
    this.titlebarHeight = this.$refs.titlebar.$el.offsetHeight
  },
})
</script>

<style lang="scss" scoped>
.canvas-test {
  padding: 0 !important;
  height: 100vh;

  .center {
    height: 100vh;
  }
}
</style>
