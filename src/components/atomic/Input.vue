<template>
  <input
    v-model="value"
    :name="name"
    :placeholder="placeholder"
    :aria-label="internalAriaLabel"
    :class="getClass"
    :autocomplete="password === 'password' ? 'new-password' : 'true'"
    :style="size ? { width: size + 'em' } : {}"
    @input="onInput"
    @keyup.enter="onEnter"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
  />
</template>

<script>
import Molecular from '../sharedScripts/molecular'

export default new Molecular({
  name: 'Input',
  props: {
    password: {
      type: Boolean,
      default: false,
    },
    name: {
      default: '',
      type: String,
    },
    placeholder: {
      default: '',
      type: String,
    },
    ariaLabel: {
      default: null,
      type: String,
    },
    focus: {
      default: false,
      type: Boolean,
    },
    size: {
      default: undefined,
      type: Number,
    },
  },
  data: {
    value: '',
  },
  computed: {
    internalAriaLabel: comp =>
      comp.ariaLabel !== null ? comp.ariaLabel : comp.placeholder,
  },
  mounted: function() {
    if (this.focus) this.$el.focus()
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
      this.onChange()
    },
    onChange() {
      const payload = {
        name: this.name,
        value: this.value,
      }
      this.$emit('valueChange', payload)
    },
    onEnter() {
      this.$emit('submit')
    },
  },
})
</script>

<style lang="scss" scoped>
@import '../sharedStyles/colors.scss';

.input {
  height: calc(1.5 * var(--baseline));
  margin-top: calc(var(--baseline) - var(--baseline) / 4);
  margin-bottom: calc(var(--baseline) - var(--baseline) / 4);
  background-color: color('surface');
  border: 0.0625rem solid color('on-surface');
  border-radius: 0.25rem;
  box-sizing: border-box;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-size: 1rem;
  transition: color, background-color 0.2s ease;
  min-width: 13rem;

  &:focus {
    outline: none;
    border-color: color('primary');
    border-width: 0.125rem;
  }
}
</style>
