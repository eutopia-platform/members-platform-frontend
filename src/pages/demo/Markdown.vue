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

export default new Component({
  name: 'MarkdownDemo',
  methods: {
    marked,
    parseMarkdown: markdown =>
      marked(markdown, {
        sanitize: true,
        smartypants: true,
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
