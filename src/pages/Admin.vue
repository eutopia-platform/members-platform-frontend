<template>
  <div :class="getClass">
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import LoginForm from '/components/molecular/LoginForm'

export default new Component({
  name: 'Admin',
  components: {
    LoginForm,
  },
})
</script>

<style lang="scss" scoped></style>
