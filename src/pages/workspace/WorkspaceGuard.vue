<template>
  <Components :is="component" />
</template>

<script>
import Workspace from '/pages/Workspace'
import NotFound from '/pages/NotFound'
import WorkspaceLoading from './WorkspaceLoading'
import gql from 'graphql-tag'

export default {
  name: 'WorkspaceGuard',
  apollo: {
    workspace: {
      client: 'work',
      query: gql`
        query currentWorkspace($spaceUrl: String!) {
          workspace(name: $spaceUrl) {
            name
          }
        }
      `,
      variables() {
        return {
          spaceUrl: this.$route.params.workspace,
        }
      },
      skip() {
        return !this.$route.params.workspace
      },
      result({ data }) {
        this.showWorkspace = data.workspace !== null
        if (data.workspace) {
          this.$apollo.provider.clients.work.cache.writeData({ data })
          if (this.$route.params.workspace !== data.workspace.name)
            history.replaceState({}, null, data.workspace.name)
        }
      },
      error(err) {
        if (
          err.message.replace('GraphQL error:', '').trim() === 'NOT_LOGGED_IN'
        ) {
          this.$router.push('/login')
          return
        } else throw Error(err)
      },
    },
    workspaces: {
      client: 'work',
      query: gql`
        query workspaceList {
          workspaces {
            name
          }
        }
      `,
      result({ data: { workspaces } }) {
        if (workspaces.length === 0) return
        this.$router.push('/space/' + workspaces[0].name)
      },
      skip() {
        return typeof this.$route.params.workspace !== 'undefined'
      },
    },
  },
  components: {
    Workspace,
    WorkspaceLoading,
    NotFound,
  },
  data: () => ({
    showWorkspace: false,
  }),
  computed: {
    component() {
      if (this.$apollo.loading) return 'WorkspaceLoading'
      return this.showWorkspace ? 'Workspace' : 'NotFound'
    },
  },
}
</script>
