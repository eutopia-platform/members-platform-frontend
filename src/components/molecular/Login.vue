<template>
  <div>
    <input type="email" v-model="email" name="email">
    <input type="password" v-model="password" name="password">
    <Button @click="submit">
      Login
    </Button>
  </div>
</template>

<script>
import Button from "../atomic/Button";

const Login = {
  name: "Login",
  components: {
    Button
  },
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
    submit() {
      const data = {
        email: this.email,
        password: this.password
      };
      this.password = "";
      this.$emit("submit", data);
    }
  }
};

export default Login;
</script>
