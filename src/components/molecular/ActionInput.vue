<template>
  <div class="action-input" :class="{ focus: currentFocus }">
    <Component
      :is="label ? 'LabeledInput' : 'Input'"
      v-model="value"
      class="input"
      :[type]="true"
      :label="label"
      :autocomplete="autocomplete"
      :focus="focus"
      :default-value="defaultValue"
      @focus="setFocus(true)"
      @blur="setFocus(false)"
      @input="onInput"
    ></Component>
    <Button ref="button" outlined @click="onClick">{{ button }}</Button>
  </div>
</template>

<script>
import Molecular from '~/scripts/component'
import LabeledInput from '~/components/molecular/LabeledInput'

export default new Molecular({
  name: 'ActionInput',
  data() {
    return {
      currentFocus: false,
      value: '',
    }
  },
  props: {
    button: {
      type: String,
      default: 'submit',
    },
    label: {
      type: String,
    },
    defaultValue: {
      type: String,
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
    type: {
      type: String,
      default: null,
    },
    focus: {
      default: false,
      type: Boolean,
    },
  },
  methods: {
    setFocus(status) {
      this.currentFocus = status
      this.$refs.button.$el.classList.toggle('primary', status)
      this.$emit(status ? 'focus' : 'blur')
    },
    onClick() {
      this.$emit('submit', this.value)
    },
    onInput(e) {
      this.$emit('input', e)
    },
  },
  components: {
    LabeledInput,
  },
})
</script>

<style lang="scss" scoped>
.action-input {
  width: 17rem;
  position: relative;
  height: calc(1.5 * var(--baseline));
  margin-top: calc(var(--baseline) - var(--baseline) / 4);
  margin-bottom: calc(var(--baseline) - var(--baseline) / 4);

  * {
    position: absolute;
    display: block;
    margin: 0 !important;
  }

  .input {
    position: absolute;
    width: 100%;
  }

  .button {
    position: absolute;
    top: 0;
    right: 0;
    border-width: 0.0625rem;
  }

  .labeled-input {
    position: absolute;
    margin-top: 0;
  }
}

.focus {
  .input,
  .button {
    border-width: 0.125rem;
  }

  .button {
    transform: translateX(0.0625rem);
  }
}
</style>
