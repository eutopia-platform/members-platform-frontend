<template>
  <div :class="getClass">
    <Component :is="currentStep" @done="stepComplete"></Component>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import Step1 from './signup/Step1'
import Step2 from './signup/Step2'

export default new Component({
  name: 'Signup',
  components: {
    Step1,
    Step2,
  },
  data() {
    return {
      steps: ['Step1', 'Step2'],
      currentStep: 'Step1',
    }
  },
  methods: {
    stepComplete() {
      this.currentStep = this.steps[this.steps.indexOf(this.currentStep) + 1]
    },
  },
})
</script>

<style lang="scss" scoped></style>
