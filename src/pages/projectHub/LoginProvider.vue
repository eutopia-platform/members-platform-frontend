<template>
  <div>
    <Login @submit="onSubmit" />
  </div>
</template>

<script>
import Login from '../../components/molecular/Login'

export default {
  name: 'LoginProvider',
  components: {
    Login,
  },
  methods: {
    onSubmit(data) {
      //all login logic goes here
    },
  },
}
</script>
