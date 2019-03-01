<template>
  <div>
    <Login @submit="onSubmit"></Login>
  </div>
</template>

<script>
import Login from "../../components/molecular/Login";

const LoginProvider = {
  name: "LoginProvider",
  components: {
    Login
  },
  methods: {
    onSubmit(data) {
      //all login logic goes here

      console.log(data);
    }
  }
};

export default LoginProvider;
</script>
