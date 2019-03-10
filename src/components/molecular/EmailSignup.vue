<template>
  <div class="contact-form">
    <!-- <p>
      Hello
    </p> -->
    <!-- <div class="center"> -->
      <!-- <Input
        @valueChange="onInputValueChange"
        placeholder="Name (optional)"
        name="name"
      ></Input> -->
      <!-- <Input
        @valueChange="onInputValueChange"
        placeholder="Email (required)"
        name="email"
        v-bind:required="true"
      ></Input>
    </div>
    <Button @click="onSubmit">
      Submit
    </Button> -->

    <div class="input-wrap">
      <Input
        @valueChange="onInputValueChange"
        @keyup.enter.native="onSubmit"
        placeholder="Email"
        name="email"
      ></Input>
      <Button @click="onSubmit">
        Sign up
      </Button>
    </div>

  </div>
</template>

<script>
import Input from "../atomic/Input.vue"
import Button from "../atomic/Button.vue"

const EmailSignup = {
  name: "EmailSignup",
  components: {
    Input,
    Button
  },
  data: () => ({
    email: {
      value: ""
    }
  }),

  methods: {
    onInputValueChange(payload) {
      //Only works because payload has the same name as the data
      this[payload.name].value = payload.value;
    },
    onSubmit () {
      const payload = {
        email: this.email
      };
      this.$emit("mySubmit", payload);
    }
  }
}
export default EmailSignup;
</script>

<style lang="scss" scoped>
  @import "../sharedStyles/colors.scss";

  .contact-form {
    background-color: $c-primary-intense;
    display: block;

    width: 20em;
    margin: auto;

    .input-wrap {
      display: flex;
      flex-direction: row;

      input {
        color: black;
        
        &::placeholder {
          color: $c-primary-notsointense;
        }
      }

      button {
        width: 7em;
      }
    }

  // .center {
  //   display: block;
  //   width: 12rem;
  //   position: relative;
  //   left: 50%;
  //   transform: translateX(-50%);
  // }

    // width: 12rem;
    // margin: auto;
  }
</style>
