<template>
  <div :class="getClass">
    <div class="center" :style="centerWidth">
      <TitleBar
        ref="titlebar"
        :toolkit="toolkit"
        :style="titleBarWidth"
      ></TitleBar>
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
import Component from '/components/sharedScripts/component'
import Canvas from './canvas/Canvas'
import ContextBar from './canvas/ContextBar'
import TitleBar from './canvas/TitleBar'
import { parseLength } from '/components/sharedScripts/parseCSS'
import gql from 'graphql-tag'

export default new Component({
  name: 'CanvasTest',
  components: {
    Canvas,
    TitleBar,
    ContextBar,
  },
  apollo: {
    toolkit: {
      client: 'tool',
      query: gql`
        query currentToolkit($id: ID!) {
          toolkit(id: $id) {
            title
            canvas
          }
        }
      `,
      variables: {
        id: '3b4d0ef7-ca20-403d-9413-0349026ad620',
      },
    },
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
    template() {
      return this.toolkit ? JSON.parse(this.toolkit.canvas) : null
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
  overflow: hidden;

  .center {
    height: 100vh;
  }
}
</style>
