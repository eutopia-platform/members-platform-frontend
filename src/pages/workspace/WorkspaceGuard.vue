<template>
  <Components :is="component" />
</template>

<script>
import Workspace from '/pages/Workspace'
import NotFound from '/pages/NotFound'
import LoadingScreen from '/pages/LoadingScreen'
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
          localStorage.setItem('workspace', data.workspace.name)
          if (this.$route.params.workspace !== data.workspace.name)
            history.replaceState(
              {},
              null,
              this.$route.path
                .toLowerCase()
                .replace(data.workspace.name.toLowerCase(), data.workspace.name)
            )
        }
      },
      error(err) {
        if (
          err.message.startsWith('Network error') ||
          err.graphQLErrors.some(err => err.message.startsWith('Network error'))
        ) {
          this.$emit('error', err)
          return true
        }
        if (
          err.message.replace('GraphQL error:', '').trim() === 'NOT_LOGGED_IN'
        ) {
          this.$router.push('/login')
          return true
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
    LoadingScreen,
    NotFound,
  },
  data: () => ({
    showWorkspace: false,
  }),
  computed: {
    component() {
      if (this.$apollo.loading) return 'LoadingScreen'
      return this.showWorkspace ? 'Workspace' : 'NotFound'
    },
  },
}
</script>
