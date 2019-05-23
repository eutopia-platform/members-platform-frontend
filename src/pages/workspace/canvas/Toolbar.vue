<template>
  <div :class="getClass">
    <ToolbarIcon name="box" icon="box"></ToolbarIcon>
    <ToolbarIcon name="annotate" icon="annotate"></ToolbarIcon>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import ToolbarIcon from './ToolbarIcon'

export default new Component({
  name: 'Toolbar',
  components: {
    ToolbarIcon,
  },
})
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/shadows';

.toolbar {
  position: absolute;
  background-color: white;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  margin: 1rem;
  z-index: 900;
  box-shadow: $shadow-default;

  .icon {
    cursor: grab;
  }

  *:not(:last-child) {
    margin-right: 0.5rem;
  }
}
</style>
