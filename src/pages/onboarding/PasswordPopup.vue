<template>
  <div class="password-popup">
    <Popup>
      <div class="create-password">
        <legend>
          <Header type="secondary">Set your password</Header>
        </legend>
        <Input
          look="blend"
          placeholder="set your password"
          type="password"
          data-lpignore="true"
          v-model="pw1"
        ></Input>
        <Input
          look="blend"
          placeholder="retype your password"
          type="password"
          data-lpignore="true"
          v-model="pw2"
        ></Input>
        <Paragraph class="error" v-if="errorMessage">{{errorMessage}}</Paragraph>
        <div class="bt-wrap">
          <Button type="icon" @click="onSubmit" :disabled="!isFormValid">Next</Button>
        </div>
        <div class="icon-wrap" :src="img">
          <Icon :src="img" size="5rem"></Icon>
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
import Paragraph from "~/components/atomic/Paragraph";
import gql from "graphql-tag";

export default {
  name: "PasswordPopup",
  components: {
    Popup,
    Header,
    Input,
    Button,
    Icon,
    Paragraph
  },
  props: {
    info: Object,
    submit: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    pw1: "",
    pw2: "",
    errorMessage: ""
  }),
  computed: {
    img: () => require("../../../data/img/onboarding/shield.svg"),
    isFormValid: function() {
      return this.pw1 !== "" && this.pw1 === this.pw2;
    }
  },
  methods: {
    onSubmit: function() {
      if (!this.submit) {
        this.$emit('submit')
        return
      }
      this.submitPassword(this.email)
        .then(token => {
          this.$emit("submit");
        })
        .catch(msg => (this.errorMessage = msg));
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
          .then(response => {
            if (response.data.verifyCode.exitcode !== 0) {
              reject(response.data.verifyCode.msg);
              return;
            }
            resolve(response.data.verifyCode.token);
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

  .error {
    color: red;
  }
}

.bt-wrap {
  margin-top: 3rem;
}
</style>
