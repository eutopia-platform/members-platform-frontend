<template>
  <Components :is="component" />
</template>

<script>
import Workspace from '~/pages/Workspace'
import NotFound from '~/pages/NotFound'
import LoadingScreen from '~/pages/LoadingScreen'

import { mapState, mapActions } from 'vuex'

export default {
  name: 'WorkspaceGuard',
  components: {
    Workspace,
    LoadingScreen,
    NotFound,
  },
  computed: {
    ...mapState('workspace', ['loading', 'workspace', 'access']),
    component() {
      if (this.loading) return 'LoadingScreen'
      return this.access ? 'Workspace' : 'NotFound'
    },
  },
  methods: mapActions('workspace', ['loadWorkspace']),
  created() {
    this.loadWorkspace()
  },
}
</script>
