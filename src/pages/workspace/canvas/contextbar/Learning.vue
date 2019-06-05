<template>
  <div :class="getClass">
    <MarkdownDisplay :markdown="content"></MarkdownDisplay>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import MarkdownDisplay from '/components/molecular/MarkdownDisplay'

export default new Component({
  name: 'Learning',
  components: {
    MarkdownDisplay,
  },
  data: {
    content: '## Description',
  },
})
</script>

<style lang="scss" scoped></style>
