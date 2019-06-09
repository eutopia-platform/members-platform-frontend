<template>
  <div :class="getClass">
    <Step1></Step1>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import Step1 from './signup/Step1'

export default new Component({
  name: 'Signup',
  components: {
    Step1,
  },
})
</script>

<style lang="scss" scoped></style>
