<template>
  <div class="contact-form">
    <!-- <p>
      Hello
    </p> -->
    <div class="center">
      <Input
        @valueChange="onInputValueChange"
        placeholder="Name (optional)"
        name="name"
      ></Input>
      <Input
        @valueChange="onInputValueChange"
        placeholder="Email (required)"
        name="email"
        v-bind:required="true"
      ></Input>
    </div>
    <Button @click="onSubmit">
      Submit
    </Button>
    <!-- <input type="text" name="" value="">
    <input type="text" name="" value="">
    <input type="text" name="" value="">
    <input type="text" name="" value=""> -->
  </div>
</template>

<script>
import Input from "../atomic/Input.vue"
import Button from "../atomic/Button.vue"

const ContactForm = {
  name: "ContactForm",
  components: {
    Input,
    Button
  },
  data: () => ({
    name: {
      value: "",
      required: false
    },
    email: {
      value: "",
      required: false
    },
    postDebug: true,
    postQuery: '{ "query": "{ queryTest }" }'
  }),
  
  methods: {
    onInputValueChange(payload) {
      //Only works because payload has the same name as the data
      this[payload.name].value = payload.value;
      this[payload.name].required = payload.required;
    },
    testGraphql () {
      console.log("is calling func");
      this.ajaxRequest = true;
      this.$http.post(
        'http://127.0.0.1:5000/api',
        this.postQuery
      ).then(result => console.log(result.data));
    },
    onSubmit () {
      const payload = {
        name: this.name,
        email: this.email
      };

      for (var item in payload) {
        if (payload.hasOwnProperty(item)) {
          //check if input is required and throw error
        }
      }

      console.log(payload);
      this.testGraphql();
    }
  }
}
export default ContactForm;
</script>

<style lang="scss" scoped>
  @import "../sharedStyles/colors.scss";

  .contact-form {
    background-color: $c-primary-intense;
    display: block;

  .center {
    display: block;
    width: 12rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

    // width: 12rem;
    // margin: auto;
  }
</style>
