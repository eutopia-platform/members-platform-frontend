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
        <PinInput @submit="onSubmit"></PinInput>
      </div>
    </Popup>
  </div>
</template>

<script>
import Popup from '../../components/molecular/Popup.vue'
import Header from '../../components/atomic/Header.vue'
import Paragraph from '../../components/atomic/Paragraph.vue'
import PinInput from '../../components/atomic/PinInput.vue'

export default {
  name: "CodePopup",
  components: {
    Popup,
    Header,
    Paragraph,
    PinInput
  },
  props: {
    info: Object
  },
  methods: {
    onSubmit: function() {
      this.$emit('submit')
    }
  }
}
</script>

<style lang="scss" scoped>
.code-wrap {
  width: 38ch;
}
</style>
