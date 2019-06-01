<template>
  <div :class="getClass">
    <Input @focus="setFocus(true)" @blur="setFocus(false)" />
    <Button ref="button">submit</Button>
  </div>
</template>

<script>
import Molecular from '/components/sharedScripts/component'

export default new Molecular({
  name: 'ActionInput',
  methods: {
    setFocus(status) {
      this.$refs.button.$el.classList.toggle('primary', status)
    },
  },
})
</script>

<style lang="scss" scoped>
.action-input {
  * {
    position: relative;
  }

  .button {
    transform: translateX(-100%);
  }
}
</style>
