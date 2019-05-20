<template>
  <div class="login">
    <LoginForm :redirect="redirect"></LoginForm>
  </div>
</template>

<script>
import LoginForm from '../components/molecular/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm,
  },
  props: {
    redirect: {
      type: String,
      default: '/space/',
    },
  },
}
</script>
