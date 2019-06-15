<template>
  <Components :is="component" />
</template>

<script>
import Workspace from '~/pages/Workspace'
import NotFound from '~/pages/NotFound'
import LoadingScreen from '~/pages/LoadingScreen'
import queryUserSpaces from '~/gql/workspaces'
import queryWorkspace from '~/gql/workspace'

export default {
  name: 'WorkspaceGuard',
  apollo: {
    workspaces: {
      client: 'work',
      skip() {
        return (
          this.$route.params.workspace !== undefined ||
          'workspace' in localStorage
        )
      },
      query: queryUserSpaces,
      result({
        data: {
          workspaces: [{ name: space }],
        },
      }) {
        this.$router.push({
          path: space,
          append: true,
        })
      },
      errorPolicy: 'ignore',
    },
    workspace: {
      client: 'work',
      skip() {
        return this.$route.params.workspace === undefined
      },
      query: queryWorkspace,
      result({
        data: {
          workspace: { name },
        },
      }) {
        localStorage.setItem('workspace', name)
      },
      variables() {
        return {
          name: this.$route.params.workspace,
        }
      },
    },
  },
  components: {
    Workspace,
    LoadingScreen,
    NotFound,
  },
  computed: {
    component() {
      if (this.$apollo.loading) return 'LoadingScreen'
      return this.workspace ? 'Workspace' : 'NotFound'
    },
  },
  created() {
    if (!this.$route.params.workspace && localStorage.getItem('workspace'))
      this.$router.push({
        path: localStorage.getItem('workspace'),
        append: true,
      })
  },
}
</script>
