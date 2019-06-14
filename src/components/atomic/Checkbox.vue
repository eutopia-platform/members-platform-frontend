<template>
  <label>
    <input type="checkbox" :value="value" @input="onInput" />
    <slot></slot>
  </label>
</template>

<script>
import Atomic from '/scripts/atomic'

export default new Atomic({
  name: 'Checkbox',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onInput: function(e) {
      this.$emit('input', e.target.checked)
    },
  },
})
</script>
