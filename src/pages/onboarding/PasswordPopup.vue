<template>
  <div class="password-popup">
    <Popup>
      <div class="create-password">
        <legend>
          <Header type="secondary">
            Set your password
          </Header>
        </legend>
        <Input
          look="blend"
          placeholder="set your password"
          type="password"
          data-lpignore="true"
        ></Input>
        <Input
          look="blend"
          placeholder="retype your password"
          type="password"
          data-lpignore="true"
        ></Input>
        <div class="bt-wrap">
          <Button type="icon"
@click="onSubmit">
            Next
          </Button>
        </div>
        <div class="icon-wrap"
:src="img">
          <Icon :src="img"
size="5rem"></Icon>
        </div>
      </div>
    </Popup>
  </div>
</template>

<script>
import Popup from "../../components/molecular/Popup.vue";
import Header from "../../components/atomic/Header.vue";
import Input from "../../components/atomic/Input.vue";
import Button from "../../components/atomic/Button.vue";
import Icon from "../../components/atomic/Icon.vue";
import gql from "graphql-tag";

export default {
  name: "PasswordPopup",
  components: {
    Popup,
    Header,
    Input,
    Button,
    Icon
  },
  props: {
    info: Object
  },
  computed: {
    img: () => require("../../../data/img/onboarding/shield.svg")
  },
  methods: {
    onSubmit: function() {
      console.log(this.$el.querySelector("input").value);
      this.submitPassword(this.$el.querySelector("input").value)
        .then(token => {
          this.$emit("submit");
        })
        .catch(msg => console.log(msg));
    },
    submitPassword: function(password, self = this) {
      return new Promise(function(resolve, reject) {
        self.$apollo
          .mutate({
            mutation: gql`mutation {
            verifyCode(email: "${self.info.email}", code: "${self.info.code}",
              password: "${password}") {
              token
              msg
              exitcode
            }}`
          })
          .then(data => {
            console.log(data);
            resolve(data.data.verifyCode.token);
          })
          .catch(data => {
            reject(data);
          });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.create-password {
  width: 40ch;
  padding-left: 3rem;
  padding-right: 3rem;

  & * {
    width: 100%;
    margin-bottom: 1rem;
  }

  .submit {
    margin-top: 2rem;
  }

  .icon-wrap {
    margin-top: 2rem;
    text-align: center;
  }
}

.bt-wrap {
  margin-top: 3rem;
}
</style>
