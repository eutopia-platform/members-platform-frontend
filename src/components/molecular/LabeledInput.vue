<template>
  <div :class="getClass">
    <label :for="`labeled-input-${_uid}`">{{ label }}:</label>
    <Input
      :id="`labeled-input-${_uid}`"
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
      type: String,
      default: '',
    },
    size: {
      type: Number,
      default: undefined,
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
  margin-top: 1rem;
  margin-bottom: 1rem;

  *:first-child {
    margin-right: 1rem;
  }
}
</style>
