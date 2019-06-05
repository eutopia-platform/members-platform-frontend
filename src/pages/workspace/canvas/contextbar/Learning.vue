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
  data: () => ({
    content: `### Description
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis laudantium beatae? Iste molestiae obcaecati et soluta odio a mollitia culpa, adipisci laborum, vero rerum voluptatem, exercitationem accusantium assumenda accusamus.`,
  }),
})
</script>

<style lang="scss" scoped></style>
