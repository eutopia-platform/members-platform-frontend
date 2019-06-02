<template>
  <div class="action-input" :class="{ focus }">
    <Component
      :is="label ? 'LabeledInput' : 'Input'"
      class="input"
      :label="label"
      :placeholder="placeholder"
      @focus="setFocus(true)"
      @blur="setFocus(false)"
    ></Component>
    <Button ref="button">{{ button }}</Button>
  </div>
</template>

<script>
import Molecular from '/components/sharedScripts/component'
import LabeledInput from '/components/molecular/LabeledInput'

export default new Molecular({
  name: 'ActionInput',
  data: {
    focus: false,
  },
  props: {
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    button: {
      type: String,
      default: 'submit',
    },
  },
  methods: {
    setFocus(status) {
      this.focus = status
      this.$refs.button.$el.classList.toggle('primary', status)
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
