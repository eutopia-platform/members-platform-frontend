<template>
  <input
    v-model="value"
    :name="name"
    :type="type"
    :placeholder="placeholder"
    :aria-label="internalAriaLabel"
    :class="getClass"
    :autocomplete="type === 'password' ? 'new-password' : 'true'"
    :style="size ? { width: size + 'em' } : {}"
    @input="onInput"
    @keyup.enter="onEnter"
  />
</template>

<script>
import Molecular from '../sharedScripts/molecular'

export default new Molecular({
  name: 'Input',
  types: ['default', 'blend', 'small'],
  props: {
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
@import '../sharedStyles/shapes.scss';
@import '../sharedStyles/text.scss';

.input {
  display: inline-block;
  border: $border;
  border-radius: $border-radius;
  box-shadow: $shadow-default;
  padding: 0.75rem;
  cursor: text;
  outline: none;
  transition: box-shadow 0.2s, transform 0.2s;
  transform: translate(0, 0px);
  box-sizing: border-box;
  border: none;

  &:active {
    box-shadow: $shadow-active;
    transform: translate(0, 0px);
    transition-duration: 0.1s;
  }

  &:disabled {
    cursor: not-allowed;
  }
}

.blend {
  border: none;
  box-shadow: none;
  border-radius: 0;
  border-bottom: 1px solid #8ca8a8;
  padding: 0.5rem;
  padding-left: 0.5rem;
  font-size: $fs-base;

  &:active {
    box-shadow: none;
  }
}

.small {
  border: 1px solid color('on-surface');
  height: 1rem;
  color: color('on-surface');
  font-size: 0.8rem;
  box-shadow: none;
}
</style>
