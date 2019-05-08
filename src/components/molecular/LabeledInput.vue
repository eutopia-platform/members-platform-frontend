<template>
  <div :class="getClass">
    <Paragraph>{{ label }}:</Paragraph>
    <Input small :size="size" />
  </div>
</template>

<script>
import Molecular from '../sharedScripts/molecular'

export default new Molecular({
  name: 'LabeledInput',
  props: {
    label: {
      type: String,
      default: 'unknown',
    },
    size: {
      default: undefined,
      type: Number,
    },
  },
})
</script>

<style lang="scss" scoped>
.labeled-input {
  display: flex;
  align-items: baseline;

  *:first-child {
    margin-right: 1rem;
  }
}
</style>
