<template>
  <div :class="getClass">
    <Header s2>{{ toolkit.title }}</Header>
    <Paragraph>ID: {{ toolkit.id }}</Paragraph>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import gql from 'graphql-tag'

export default new Component({
  name: 'Editor',
  apollo: {
    toolkit: {
      client: 'tool',
      query: gql`
        query editorKit($id: ID!) {
          toolkit(id: $id) {
            id
            title
            description_markdown
            canvas
            learning
          }
        }
      `,
      variables() {
        return {
          id: this.$route.params.id,
        }
      },
    },
  },
  data() {
    return {
      toolkit: {
        id: '',
        title: '',
        description_markdown: '',
        canvas: '',
        learning: '',
      },
    }
  },
})
</script>

<style lang="scss" scoped></style>
