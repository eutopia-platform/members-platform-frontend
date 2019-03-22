<template>
<div class="onboarding">
  <component @next="onNext" v-bind:info="lastSubmitData"
    v-bind:is="currentView"
  ></component>
</div>
</template>

<script>
import ViewEmail from './onboarding/views/ViewEmail.vue'
import ViewName from './onboarding/views/ViewName.vue'
import ViewMembers from './onboarding/views/ViewMembers.vue'
import ViewMilestone from './onboarding/views/ViewMilestone.vue'
import ViewFinal from './onboarding/views/ViewFinal.vue'

export default {
  name: "Onboarding",
  components: {
    ViewEmail,
    ViewName,
    ViewMembers,
    ViewMilestone,
    ViewFinal
  },
  data: () => ({
    counter: 0,
    views: ['ViewEmail', 'ViewName', 'ViewMembers', 'ViewMilestone', 'ViewFinal'],
    lastSubmitData: undefined
  }),
  computed: {
    currentView: comp => comp.views[comp.counter]
  },
  methods: {
    onNext: function(payload) {
      this.lastSubmitData = payload
      if (this.counter < this.views.length - 1)
        this.counter++
      else
        window.open('/workspace', '_self')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
