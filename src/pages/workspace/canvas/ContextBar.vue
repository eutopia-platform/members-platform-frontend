<template>
  <Sidebar
    ref="sidebar"
    right
    collapsable
    @collapse="onCollapse"
    @expand="onExpand"
    @changeWidth="w => $emit('changeWidth', w)"
  >
    <Workflow ref="content"></Workflow>
  </Sidebar>
</template>

<script>
import Component from '/components/sharedScripts/component'
import Sidebar from '/components/molecular/Sidebar'
import Workflow from './contextbar/Workflow'

export default new Component({
  name: 'ContextBar',
  components: {
    Sidebar,
    Workflow,
  },
  methods: {
    onCollapse() {
      this.$refs.content.$el.style.display = 'none'
    },
    onExpand() {
      this.$refs.content.$el.style.display = 'initial'
    },
  },
})
</script>

<style lang="scss" scoped>
.sidebar {
  padding: 2rem;
}
</style>
