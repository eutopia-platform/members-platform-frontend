<template>
  <div class="onboarding">
    <Component
      :is="currentView"
      ref="view"
      :info="userInfo"
      :submit="submit"
      @next="onNext"
      @queryCode="queryCode"
    ></Component>
    <CodePopup
      v-if="showCodePopup"
      :info="userInfo"
      :submit="submit"
      @submit="onCodeSubmit"
    ></CodePopup>
    <PasswordPopup
      v-if="showPasswordPopup"
      :info="userInfo"
      :submit="submit"
      @submit="onPasswordSubmit"
    ></PasswordPopup>
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
  name: 'Onboarding',
  components: {
    ViewEmail,
    ViewName,
    ViewMembers,
    ViewMilestone,
    ViewFinal,
    CodePopup,
    PasswordPopup,
  },
  data: () => ({
    currentViewIndex: 0,
    views: [
      'ViewEmail',
      'ViewName',
      'ViewMilestone',
      'ViewMembers',
      'ViewFinal',
    ],
    userInfo: {
      email: 'no.email@submitted.com',
      emailShort: 'no.email',
      organization: 'unknown organization',
      code: '',
      members: [],
      milestone: 'unknown milestone',
    },
    showCodePopup: false,
    showPasswordPopup: false,
    submit: true,
  }),
  computed: {
    currentView: comp => comp.views[comp.currentViewIndex],
  },
  created: function() {
    this.submit = this.$route.query.nosubmit === undefined
    // skip parts of signup depending on url 'stage' param; e.g. stage=members => ViewMembers
    const stage = this.$route.query.stage
      ? this.$route.query.stage.toLowerCase()
      : undefined
    if (!stage) return

    const lowercaseViewNames = this.views.map(v =>
      v.replace('View', '').toLowerCase()
    )

    if (lowercaseViewNames.includes(stage)) {
      console.log('skip to ' + stage)
      this.currentViewIndex = lowercaseViewNames.indexOf(stage)
    }
  },
  methods: {
    onNext: function(payload) {
      const currentView = this.views[this.currentViewIndex]

      switch (currentView) {
        case 'ViewName':
          this.userInfo.organization = payload.name
          break
        case 'ViewMembers':
          this.userInfo.members = payload.members.filter(
            member => member.length
          )
          break
        case 'ViewMilestone':
          this.userInfo.milestone = payload.milestone
      }

      if (this.currentViewIndex < this.views.length - 1) this.currentViewIndex++
      else window.open('/workspace', '_self')
    },
    queryCode: function(email) {
      this.userInfo.email = email
      this.userInfo.emailShort = email.split('@')[0]
      this.showCodePopup = true
    },
    onCodeSubmit: function(code) {
      this.userInfo.code = code
      this.showCodePopup = false
      this.showPasswordPopup = true
    },
    onPasswordSubmit: function() {
      this.showPasswordPopup = false
      this.currentViewIndex = 1
    },
  },
}
</script>
