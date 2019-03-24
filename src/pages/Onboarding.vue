<template>
<div class="onboarding">
  <component @next="onNext" @queryCode="queryCode" v-bind:info="userInfo"
    v-bind:is="currentView" ref="view"
  ></component>
  <CodePopup v-if="showCodePopup" :info="userInfo" @submit="onCodeSubmit"></CodePopup>
  <PasswordPopup v-if="showPasswordPopup" :info="userInfo" @submit="onPasswordSubmit"></PasswordPopup>
</div>
</template>

<script>
import ViewEmail from './onboarding/views/ViewEmail.vue'
import ViewName from './onboarding/views/ViewName.vue'
import ViewMembers from './onboarding/views/ViewMembers.vue'
import ViewMilestone from './onboarding/views/ViewMilestone.vue'
import ViewFinal from './onboarding/views/ViewFinal.vue'
import CodePopup from './onboarding/CodePopup.vue'
import PasswordPopup from './onboarding/PasswordPopup.vue'

export default {
  name: "Onboarding",
  components: {
    ViewEmail,
    ViewName,
    ViewMembers,
    ViewMilestone,
    ViewFinal,
    CodePopup,
    PasswordPopup
  },
  data: () => ({
    counter: 0,
    views: ['ViewEmail', 'ViewName', 'ViewMilestone', 'ViewMembers', 'ViewFinal'],
    userInfo: {
      email: "",
      emailShort: "",
      organization: "",
      code: "",
      members: [],
      milestone: ""
    },
    showCodePopup: false,
    showPasswordPopup: false
  }),
  computed: {
    currentView: comp => comp.views[comp.counter],
  },
  methods: {
    onNext: function(payload) {
      if (this.views[this.counter] == 'ViewEmail')
        this.email = payload.text.value

      switch (this.views[this.counter]) {
        case 'ViewEmail':
          this.userInfo.email = payload.text.value
          this.userInfo.emailShort = payload.text.value.split('@')[0]
          break
        case 'ViewName':
          this.userInfo.organization = payload.text.value
          break
        case 'ViewMembers':
          this.userInfo.members = payload.members.filter(member => member.length)
          break
        case 'ViewMilestone':
          this.userInfo.milestone = payload.text.value
      }

      if (this.counter < this.views.length - 1)
        this.counter++
      else
        window.open('/workspace', '_self')
    },
    queryCode: function(email) {
      this.userInfo.email = email
      this.showCodePopup = true
    },
    onCodeSubmit: function(code) {
      this.userInfo.code = code
      this.showCodePopup = false
      this.showPasswordPopup = true
    },
    onPasswordSubmit: function() {
      this.showPasswordPopup = false
      this.$refs.view.onQueryFinal()
    }
  }
}
</script>
