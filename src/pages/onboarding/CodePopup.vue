<template>
  <div class="code-popup">
    <Popup>
      <div class="code-wrap">
        <Header secondary>
          Find a secret in your email
        </Header>
        <Paragraph>
          We have send you a 6 digit confirmation code to {{info.email}}. It
          will expire shortly, so please enter your code soon.
        </Paragraph>
        <div class="input-wrap">
          <PinInput @submit="onSubmit"></PinInput>
        </div>
        <Paragraph>
          Keep this tab open to enter your code. If you didn't receive an email,
          check your spam folder.
        </Paragraph>
        <div class="icon-wrap" :src="img">
          <Icon :src="img" size="5rem"></Icon>
        </div>
      </div>
    </Popup>
  </div>
</template>

<script>
import Popup from '../../components/molecular/Popup.vue'
import Header from '../../components/atomic/Header.vue'
import Paragraph from '../../components/atomic/Paragraph.vue'
import PinInput from '../../components/atomic/PinInput.vue'
import Icon from '../../components/atomic/Icon.vue'
import gql from 'graphql-tag'

export default {
  name: "CodePopup",
  components: {
    Popup,
    Header,
    Paragraph,
    PinInput,
    Icon
  },
  props: {
    info: Object,
    submit: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onSubmit: function(pin) {
      if (!this.submit) {
        this.$emit('submit', pin)
        return
      }
      this.submitCode(pin).then(valid => {
        if (valid)
          this.$emit('submit', pin)
        else
          alert('not valid')
      }).catch(data => alert(data.msg))
    },
    submitCode: function(pin, self = this) {
      return new Promise(function(resolve, reject) {
        self.$apollo.mutate({
          mutation: gql`mutation {
            isCodeValid(email: "${self.info.email}", code: "${pin}") {
              isvalid
            }}`
        }).then(data => {
          resolve(data.data.isCodeValid.isvalid)
        }).catch(data => {
          reject(data)
        })
      })
    }
  },
  computed: {
    img: () => require('../../../data/img/onboarding/inbox.svg')
  }
}
</script>

<style lang="scss" scoped>
.code-wrap {
  width: 40ch;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-bottom: 3rem;

  .input-wrap {
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  .icon-wrap {
    margin-top: 2rem;
    text-align: center;
  }
}
</style>
