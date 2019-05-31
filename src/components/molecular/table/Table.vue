<template>
  <div :class="getClass" :style="layout">
    <Cell v-for="(e, i) in columns" :key="i" border-bottom>
      <Paragraph>{{ e }}</Paragraph>
    </Cell>
    <slot></slot>
  </div>
</template>

<script>
import Molecular from '/components/sharedScripts/Molecular'
import Cell from './Cell'

export default new Molecular({
  name: 'Table',
  props: {
    columns: {
      type: Array,
      required: false,
    },
  },
  computed: {
    layout() {
      return {
        'grid-template-columns': '1fr '.repeat(this.columns.length),
      }
    },
  },
  components: {
    Cell,
  },
})
</script>

<style lang="scss" scoped>
.table {
  display: grid;
  margin-top: var(--baseline);
  margin-bottom: var(--baseline);
}
</style>
