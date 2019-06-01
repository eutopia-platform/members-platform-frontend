<template>
  <div class="action-input" :class="{ focus }">
    <Input @focus="setFocus(true)" @blur="setFocus(false)" />
    <Button ref="button">submit</Button>
  </div>
</template>

<script>
import Molecular from '/components/sharedScripts/component'

export default new Molecular({
  name: 'ActionInput',
  data: {
    focus: false,
  },
  methods: {
    setFocus(status) {
      this.focus = status
      this.$refs.button.$el.classList.toggle('primary', status)
    },
  },
})
</script>

<style lang="scss" scoped>
.action-input {
  display: inline-block;
  min-width: 17rem;
  position: relative;
  height: calc(1.5 * var(--baseline));
  margin-top: calc(var(--baseline) - var(--baseline) / 4);
  margin-bottom: calc(var(--baseline) - var(--baseline) / 4);

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
