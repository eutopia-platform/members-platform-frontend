<template>
  <div>
    <h1>Hello Project Hub!</h1>
    <p>This page was created with Vue!</p>
    <RouterLink to="/">
      <Button>Go to landing page</Button>
    </RouterLink>
    <LoginProvider />
  </div>
</template>

<script>
import LoginProvider from './projectHub/LoginProvider'

export default {
  name: 'ProjectHub',
  components: {
    LoginProvider,
  },
}
</script>
