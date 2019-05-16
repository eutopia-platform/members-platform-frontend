<template>
  <div :class="getClass">
    <Paragraph>{{ label }}:</Paragraph>
    <Input
      small
      :size="size"
      :placeholder="placeholder"
      :value="defaultValue"
      @input="onInput"
    />
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
    defaultValue: {
      type: String,
      default: '',
    },
    placeholder: {
      default: '',
      type: String,
    },
    size: {
      default: undefined,
      type: Number,
    },
  },
  data: {
    value: '',
  },
  methods: {
    onInput: function(value) {
      this.value = value
      this.$emit('input', this.value)
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
