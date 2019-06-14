<template>
  <Header s4 :class="getClass">{{ workspace.name }}</Header>
</template>

<script>
import Component from '/scripts/component'
import gql from 'graphql-tag'

export default new Component({
  name: 'WorkspaceIndicator',
  apollo: {
    workspace: {
      query: gql`
        {
          workspace @client {
            name
          }
        }
      `,
      client: 'work',
    },
  },
})
</script>

<style lang="scss" scoped>
.workspace-indicator {
  margin-left: -0.5rem;
}
</style>
