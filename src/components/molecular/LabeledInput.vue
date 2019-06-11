<template>
  <div class="labeled-input" :class="{ currentFocus }">
    <Input
      :id="`labeled-input-${_uid}`"
      v-model="value"
      :[type]="true"
      :autocomplete="autocomplete"
      :focus="focus"
      @focus="setFocus(true)"
      @blur="setFocus(false)"
      @input="onInput"
    />
    <label
      ref="label"
      :for="`labeled-input-${_uid}`"
      :class="{ top: currentFocus || value.length }"
    >{{ label }}</label>
  </div>
</template>

<script>
import Molecular from '/components/sharedScripts/component'

export default new Molecular({
  name: 'LabeledInput',
  props: {
    label: {
      type: String,
      required: true,
    },
    defaultValue: {
      type: String,
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
    focus: {
      default: false,
      type: Boolean,
    },
    type: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      currentFocus: false,
      value: '',
    }
  },
  watch: {
    defaultValue(v) {
      this.value = v
    },
  },
  created() {
    this.value = this.defaultValue || ''
  },
  methods: {
    setFocus(status) {
      this.currentFocus = status
      this.$emit(status ? 'focus' : 'blur')
    },
    onInput(e) {
      this.$emit('input', e)
    },
  },
})
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/colors';

.labeled-input {
  width: 14rem;
  position: relative;
  height: calc(1.5 * var(--baseline));
  margin-top: calc(var(--baseline) - var(--baseline) / 4);
  margin-bottom: calc(var(--baseline) - var(--baseline) / 4);
  position: relative;

  * {
    position: absolute;
    display: block;
    margin: 0 !important;
  }

  .input {
    width: 100%;
    min-width: initial;
  }

  label {
    font-size: 1rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    left: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    transition: margin-top 0.1s ease, transform 0.1s ease, color 0.1s ease;
    background: color('surface');
    user-select: none;
    cursor: text;
  }

  label.top {
    transform: translateY(calc(var(--baseline) * -1 - 0.4rem)) scale(0.8);
    cursor: initial;
  }
}

.focus {
  label {
    color: color('primary');
  }
}
</style>
