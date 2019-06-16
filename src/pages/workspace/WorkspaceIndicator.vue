<template>
  <Header s4>{{ workspace.name }}</Header>
</template>

<script>
import Component from '~/scripts/component'

import { mapState } from 'vuex'

export default new Component({
  name: 'WorkspaceIndicator',
  computed: mapState('workspace', ['workspace']),
})
</script>

<style lang="scss" scoped>
.workspace-indicator {
  margin-left: -0.5rem;
}
</style>
