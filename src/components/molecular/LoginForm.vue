<template>
  <div class="login-form">
    <Header type="secondary">
      Login
    </Header>
    <Input look="blend"
placeholder="email" data-lpignore="true"></Input>
    <Input
      look="blend"
      placeholder="password"
      type="password"
      data-lpignore="true"
    ></Input>
    <Button>Submit</Button>
  </div>
</template>

<script>
import Popup from "./Popup.vue";
import Header from "../atomic/Header.vue";
import Input from "../atomic/Input.vue";
import Button from "../atomic/Button.vue";

export default {
  name: "LoginForm",
  components: {
    Popup,
    Header,
    Input,
    Button
  }
};
</script>

<style lang="scss" scoped>
@import "../sharedStyles/shadows.scss";

.login-form {
  width: 30rem;
  height: 40rem;
  padding: 2rem;
  box-sizing: border-box;
  max-width: 100vw;
  max-height: 100vh;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: $shadow-default;
}
</style>
