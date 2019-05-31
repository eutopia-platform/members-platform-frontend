<template>
  <div
    class="table-cell"
    :class="{ 'border-bottom': borderBottom, 'border-right': borderRight }"
  >
    <slot></slot>
  </div>
</template>

<script>
import Atomic from '/components/sharedScripts/atomic'

export default new Atomic({
  name: 'TableCell',
  props: {
    borderBottom: {
      type: Boolean,
      default: false,
    },
    borderRight: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/colors';

.table-cell {
  height: calc(2 * var(--baseline));
  * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
}

.border-bottom {
  border-bottom: 1px solid color('on-surface');
}

.border-right {
  border-right: 1px solid color('on-surface');
}
</style>
