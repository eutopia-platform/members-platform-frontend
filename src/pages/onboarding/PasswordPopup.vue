<template>
  <div class="password-popup">
    <Popup>
      <div class="create-password">
        <legend>
          <Header type="secondary">Set your password</Header>
        </legend>
        <Input look="blend" placeholder="set your password" type="password" data-lpignore="true"></Input>
        <Input look="blend" placeholder="retype your password" type="password" data-lpignore="true"></Input>
        <div class="bt-wrap">
          <Button type="icon" @click="onSubmit">Next</Button>
        </div>
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
import Input from '../../components/atomic/Input.vue'
import Button from '../../components/atomic/Button.vue'
import Icon from '../../components/atomic/Icon.vue'

export default {
  name: "PasswordPopup",
  components: {
    Popup,
    Header,
    Input,
    Button,
    Icon
  },
  methods: {
    onSubmit: function() {
      this.$emit('submit')
    }
  },
  computed: {
    img: () => require('../../../data/img/onboarding/shield.svg')
  }
}
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
