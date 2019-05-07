<template>
  <div>
    <RouterView org="test" @next="next"></RouterView>
    <Component :is="popupComponent" :submit="false" @next="next"></Component>
  </div>
</template>

<script>
import CodePopup from './signup/CodePopup'
import PasswordPopup from './signup/PasswordPopup'

const Route = Symbol('route')
const Popup = Symbol('popup')
const steps = [
  {
    type: Route,
    route: '/',
  },
  {
    type: Popup,
    component: CodePopup,
  },
  {
    type: Popup,
    component: PasswordPopup,
  },
  {
    type: Route,
    route: 'name',
  },
  {
    type: Route,
    route: 'milestone',
  },
  {
    type: Route,
    route: 'members',
  },
]

export default {
  name: 'Signup',
  data: () => ({
    info: {},
    stepIndex: 0,
    popupComponent: null,
  }),
  methods: {
    next: function() {
      const nextStep = steps[++this.stepIndex]

      if (nextStep.type === Route) {
        this.popupComponent = null
        this.$router.push(nextStep.route)
      } else if (nextStep.type === Popup) {
        this.popupComponent = nextStep.component
      }
    },
  },
}
</script>
