<template>
  <label>
    <input type="checkbox" v-bind:value="value" @input="onInput" />
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
  props: ['value'],
  methods: {
    onInput: function(e) {
      this.$emit('input', e.target.checked)
    },
  },
}
</script>
