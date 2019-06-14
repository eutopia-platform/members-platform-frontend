<template>
  <div
    :class="getClass"
    v-html="parseMarkdown(encoded ? decodeURI(markdown) : markdown)"
  ></div>
</template>

<script>
import Molecular from '~/scripts/component'

import marked from 'marked'
import Vue from 'vue'

import Header from '~/components/atomic/Header'
import Paragraph from '~/components/atomic/Paragraph'

const createElement = (el, content, props = {}) =>
  Object.assign(
    new (Vue.extend(el))({
      propsData: props,
    }).$mount().$el,
    { innerHTML: content }
  ).outerHTML

const renderer = new marked.Renderer()
renderer.heading = (text, level) =>
  createElement(Header, text, { [`s${Math.min(level, 5)}`]: true })
renderer.paragraph = text => createElement(Paragraph, text)

export default new Molecular({
  name: 'MarkdownDisplay',
  props: {
    markdown: {
      type: String,
      required: true,
    },
    encoded: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    parseMarkdown: markdown =>
      marked(markdown, {
        sanitize: true,
        smartypants: true,
        smartLists: true,
        breaks: true,
        renderer,
      }),
  },
})
</script>

<style lang="scss" scoped>
.markdown-display {
  overflow: auto;
}
</style>
