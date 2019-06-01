<template>
  <div class="labeled-input" :class="{ focus }">
    <Input
      :id="`labeled-input-${_uid}`"
      @focus="setFocus(true)"
      @blur="setFocus(false)"
    />
    <label ref="label" :for="`labeled-input-${_uid}`">{{ label }}</label>
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
  },
  data: {
    focus: false,
  },
  methods: {
    setFocus(status) {
      this.focus = status
    },
  },
})
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/colors';

.labeled-input {
  display: inline-block;
  min-width: 17rem;
  position: relative;
  height: calc(1.5 * var(--baseline));
  margin-top: calc(var(--baseline) - var(--baseline) / 4);
  margin-bottom: calc(var(--baseline) - var(--baseline) / 4);
  position: relative;

  * {
    position: absolute;
  }

  label {
    font-size: 1rem;
    line-height: var(--baseline);
    margin-top: var(--baseline);
    margin-bottom: var(--baseline);
    margin-left: 0.4rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    transition: margin-top 0.1s ease, transform 0.1s ease, color 0.1s ease;
    background: color('surface');
    user-select: none;
  }
}

.focus {
  label {
    color: color('primary');
    margin-top: calc(var(--baseline) / 4);
    transform: scale(0.8);
  }
}
</style>
