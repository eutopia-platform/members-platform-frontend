<template>
  <div :class="getClass">
    <Header s2>Cube, one workspace for all your projects.</Header>
    <Paragraph>Enter your email to be notified about future product updates.</Paragraph>
    <EmailSignup></EmailSignup>
  </div>
</template>

<script>
import Component from '~/scripts/component'
import EmailSignup from '~/components/molecular/EmailSignup'

export default new Component({
  name: 'Newsletter',
  components: {
    EmailSignup,
  },
})
</script>

<style lang="scss" scoped>
.newsletter {
  padding-top: 35vh;
  padding-bottom: 35vh;
  text-align: center;
  color: white;

  .email-signup {
    margin: auto;
    margin-top: 3rem;
  }
}
</style>
