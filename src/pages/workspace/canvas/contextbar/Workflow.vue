<template>
  <div :class="getClass">
    <MarkdownDisplay
      v-if="toolkit && toolkit.workflow.length"
      :markdown="toolkit.workflow"
      :encoded="true"
    ></MarkdownDisplay>
    <Paragraph v-else>no workflow available</Paragraph>
    <Button secondary>Milestone Challenge</Button>
  </div>
</template>

<script>
import Component from '/scripts/component'
import MarkdownDisplay from '/components/molecular/MarkdownDisplay'
import gql from 'graphql-tag'

export default new Component({
  name: 'Workflow',
  apollo: {
    toolkit: {
      client: 'tool',
      query: gql`
        query getWorkflow($id: ID!) {
          toolkit(id: $id) {
            workflow
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
  data() {
    return {
      toolkit: {
        workflow: 'loading...',
      },
    }
  },
  components: {
    MarkdownDisplay,
  },
})
</script>

<style lang="scss" scoped>
.workflow {
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }

  .button {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
