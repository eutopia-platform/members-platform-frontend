<template>
  <div class="contact-form">
    <!-- <p>
      Hello
    </p> -->
    <Input placeholder="Name (required)"></Input>
    <Input placeholder="Email (required)"></Input>
    <Input placeholder="Subject (required)"></Input>
    <Input placeholder="Message (required)"></Input>
    <!-- <input type="text" name="" value="">
    <input type="text" name="" value="">
    <input type="text" name="" value="">
    <input type="text" name="" value=""> -->
  </div>
</template>

<script>
import Input from "../atomic/Input.vue"
const ContactForm = {
  name: "ContactForm",
  components: {
    Input
  }
}
export default ContactForm;
</script>

<style lang="scss" scoped>

  .contact-form {
    background-color: gray;
    display: block;
    // width: 12rem;
    // margin: auto;
  }
</style>
