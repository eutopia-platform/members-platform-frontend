<template>
  <div :class="getClass">
    <div class="center" :style="centerWidth">
      <TitleBar ref="titlebar" :style="titleBarWidth"></TitleBar>
      <Canvas
        :style="canvasPos"
        :width="canvasWidth"
        :template="template"
      ></Canvas>
    </div>
    <ContextBar @changeWidth="updateSidebarWidth"></ContextBar>
  </div>
</template>

<script>
import Component from '~/scripts/component'
import Canvas from './canvas/Canvas'
import ContextBar from './canvas/ContextBar'
import TitleBar from './canvas/TitleBar'
import { parseLength } from '~/scripts/parseCSS'
import { mapState, mapActions } from 'vuex'

export default new Component({
  name: 'CanvasPage',
  components: {
    Canvas,
    TitleBar,
    ContextBar,
  },
  data: () => ({
    sidebarWidth: 0,
    titlebarHeight: 0,
  }),
  props: {
    offsetLeft: {
      type: Number | String,
      required: true,
    },
    id: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapState('toolkit', { toolkit: 'currentKit' }),
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
    template() {
      return this.toolkit ? JSON.parse(this.toolkit.canvas) : null
    },
  },
  created() {
    this.fetchToolkit(this.id)
  },
  methods: {
    ...mapActions('toolkit', ['fetchToolkit']),
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
.canvas-page {
  padding: 0 !important;
  height: 100vh;
  overflow: hidden;

  .center {
    height: 100vh;
  }
}
</style>
