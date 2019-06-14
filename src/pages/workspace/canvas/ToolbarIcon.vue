<template>
  <div :class="getClass" draggable="true" @dragstart="onDragStart">
    <Icon :name="'canvas/toolbar/' + icon" recolor></Icon>
  </div>
</template>

<script>
import Component from '/scripts/component'

export default new Component({
  name: 'ToolbarIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    onDragStart(e) {
      e.dataTransfer.setData('text/plain', this.name)
    },
  },
})
</script>

<style lang="scss" scoped>
.toolbar-icon {
  position: relative;
  width: 2rem;
  height: 2rem;
  cursor: grab;

  .icon {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin-top: 0;
  }
}
</style>
