<template>
  <div class="code-popup">
    <Popup>
      <div class="code-wrap">
        <Header type='secondary'>
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
    info: Object
  },
  methods: {
    onSubmit: function() {
      this.$emit('submit')
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
