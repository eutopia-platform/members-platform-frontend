<template>
  <div :class="getClass">
    <div class="center" :style="centerWidth">
      <TitleBar :style="titleBarWidth"></TitleBar>
      <Canvas></Canvas>
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

export default new Component({
  name: 'CanvasTest',
  components: {
    Canvas,
    Sidebar,
    TitleBar,
  },
  data: {
    sidebarWidth: 0,
    offsetLeft: 0,
  },
  computed: {
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
  },
  methods: {
    updateSidebarWidth(width) {
      this.sidebarWidth = width
      this.offsetLeft = this.$el.offsetLeft + 'px'
    },
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
