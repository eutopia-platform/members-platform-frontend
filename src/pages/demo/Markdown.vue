<template>
  <div :class="getClass">
    <Header s2>Markdown Demo</Header>
    <textarea v-model="input"></textarea>
    <div v-html="parseMarkdown(input)"></div>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import marked from 'marked'
import Vue from 'vue'

import Header from '/components/atomic/Header'
import Paragraph from '/components/atomic/Paragraph'

const createElement = (el, content, props = {}) => {
  const comp = new (Vue.extend(el))({
    propsData: props,
  })
  comp.$slots.default = content
  return comp.$mount().$el.outerHTML
}

const renderer = new marked.Renderer()
renderer.heading = (text, level) =>
  createElement(Header, text, { [`s${Math.min(level, 5)}`]: true })
renderer.paragraph = text => createElement(Paragraph, text)

export default new Component({
  name: 'MarkdownDemo',
  methods: {
    marked,
    parseMarkdown: markdown =>
      marked(markdown, {
        sanitize: true,
        smartypants: true,
        renderer,
      }),
  },
  data: {
    input: '',
  },
})
</script>

<style lang="scss" scoped>
.markdown-demo {
  padding: 2rem;
}
</style>
