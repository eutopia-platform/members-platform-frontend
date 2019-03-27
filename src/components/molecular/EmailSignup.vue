<template>
  <div class="contact-form">
    <div class="input-wrap">
      <Input
        disabled
        placeholder="Email"
        name="email"
        @valueChange="onInputValueChange"
        @keyup.enter.native="onSubmit"
      ></Input>
      <Button disabled @click="onSubmit">
        Sign up
      </Button>
    </div>
  </div>
</template>

<script>
import Input from "../atomic/Input.vue";
import Button from "../atomic/Button.vue";

export default {
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

  created() {
    this.$eventBus.$on("scroll-to-email", () => {
      const input = this.$el.querySelector("input");
      if (input) {
        input.scrollIntoView({
          behavior: "smooth"
        });
        setTimeout(() => input.focus(), 1000);
      }
    });
  },

  methods: {
    onInputValueChange(payload) {
      //Only works because payload has the same name as the data
      this[payload.name].value = payload.value;
    },
    onSubmit() {
      const payload = {
        email: this.email
      };
      this.$emit("mySubmit", payload);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../sharedStyles/colors.scss";

.contact-form {
  background-color: $c-primary;
  display: block;

  width: 20em;
  margin: auto;

  .input-wrap {
    display: flex;
    flex-direction: row;

    input {
      &::placeholder {
        color: $c-primary-light;
      }
    }

    button {
      width: 7em;
    }
  }
}
</style>
