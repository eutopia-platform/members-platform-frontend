<template>
  <SplitView :img-source="img">
    <Header secondary>Let's create your workspace</Header>
    <template v-slot:content>
      <Input
        v-model="email"
        look="blend"
        placeholder="you-are-awesome@example.com"
        :focus="true"
      />
      <Checkbox v-model="hasAgreedToPrivacyPolicy">
        I agree to the
        <RouterLink to="/privacy">Privacy Policy</RouterLink>
      </Checkbox>
      <Button big :disabled="!isFormValid" @click="$emit('next')">Next</Button>
    </template>
  </SplitView>
</template>

<script>
import SplitView from './SplitView'

export default {
  name: 'Email',
  components: {
    SplitView,
  },
  data: () => ({
    email: '',
    hasAgreedToPrivacyPolicy: false,
  }),
  computed: {
    isFormValid: (self = this) =>
      self.email !== '' && self.hasAgreedToPrivacyPolicy,
    img: () => require('../../../data/img/onboarding/view-email.png'),
  },
}
</script>

<style lang="scss" scoped>
* {
  width: 100%;
  margin-bottom: 1.5rem;
}
</style>
