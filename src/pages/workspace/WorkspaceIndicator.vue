<template>
  <div :class="getClass">
    <Header quaternary>{{ workspaces[0].name }} Workspace</Header>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import gql from 'graphql-tag'

export default new Component({
  name: 'WorkspaceIndicator',
  apollo: {
    $client: 'work',
    workspaces: gql`
      {
        workspaces {
          name
        }
      }
    `,
  },
  data: {
    workspaces: [{ name: 'uknown' }],
  },
})
</script>

<style lang="scss" scoped>
.workspace-indicator {
  margin-left: -0.5rem;
}
</style>
