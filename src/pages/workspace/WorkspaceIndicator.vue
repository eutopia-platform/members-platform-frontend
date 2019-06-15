<template>
  <!-- <Header s4 :class="getClass">{{ workspace.name }}</Header> -->
  <Header s4>hello</Header>
</template>

<script>
import Component from '~/scripts/component'
import queryWorkspace from '~/gql/workspace'

export default new Component({
  name: 'WorkspaceIndicator',
  apollo: {
    workspace: {
      client: 'work',
      query: queryWorkspace,
      fetchPolicy: 'cache-only',
    },
  },
  data() {
    return {
      workspace: {
        name: 'unknown',
      },
    }
  },
})
</script>

<style lang="scss" scoped>
.workspace-indicator {
  margin-left: -0.5rem;
}
</style>
