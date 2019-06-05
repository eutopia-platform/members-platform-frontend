<template>
  <Sidebar
    ref="sidebar"
    :class="getClass"
    right
    collapsable
    @collapse="onCollapse"
    @expand="onExpand"
    @changeWidth="w => $emit('changeWidth', w)"
  >
    <div class="title">
      <Icon name="chevron_left" @click="changePanel('prev')"></Icon>
      <Header s3>{{ activePanel }}</Header>
      <Icon name="chevron_right" @click="changePanel('next')"></Icon>
    </div>
    <Component :is="activePanel" ref="content"></Component>
  </Sidebar>
</template>

<script>
import Component from '/components/sharedScripts/component'
import Sidebar from '/components/molecular/Sidebar'
import Workflow from './contextbar/Workflow'
import Learning from './contextbar/Learning'

export default new Component({
  name: 'ContextBar',
  components: {
    Sidebar,
    Workflow,
    Learning,
  },
  methods: {
    onCollapse() {
      this.$refs.content.$el.style.display = 'none'
    },
    onExpand() {
      this.$refs.content.$el.style.display = 'initial'
    },
    changePanel(dir) {
      if (dir === 'next')
        this.activePanel = this.panels[
          (this.panels.indexOf(this.activePanel) + 1) % this.panels.length
        ]
      else
        this.activePanel = this.panels[
          this.panels.indexOf(this.activePanel) - 1 < 0
            ? this.panels.length - 1
            : this.panels.indexOf(this.activePanel) - 1
        ]
    },
  },
  data() {
    const panels = ['Workflow', 'Learning']
    return {
      panels,
      activePanel: panels[0],
    }
  },
})
</script>

<style lang="scss" scoped>
.context-bar {
  padding: 2rem;
  overflow: scroll;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    * {
      margin: 0;
    }

    .icon {
      cursor: pointer;
    }
  }
}
</style>
