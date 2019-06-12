<template>
  <div :class="getClass">
    <MarkdownDisplay
      :markdown="toolkit.learning"
      :encoded="true"
    ></MarkdownDisplay>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import MarkdownDisplay from '/components/molecular/MarkdownDisplay'
import gql from 'graphql-tag'

export default new Component({
  name: 'Learning',
  components: {
    MarkdownDisplay,
  },
  apollo: {
    toolkit: {
      client: 'tool',
      query: gql`
        query getLearning($id: ID!) {
          toolkit(id: $id) {
            learning
          }
        }
      `,
      variables() {
        return {
          id: this.$route.params.id,
        }
      },
      fetchPolicy: 'cache-only',
    },
  },
  data: () => ({
    toolkit: {
      learning: 'loading...',
    },
  }),
})
</script>
