<template>
  <SplitView :imgSource="img">
    <Header secondary>Let's create your workspace</Header>
    <template v-slot:content>
      <Input
        look="blend"
        placeholder="you-are-awesome@example.com"
        :focus="true"
      />
      <Checkbox>
        I agree to the
        <RouterLink to="/privacy">Privacy Policy</RouterLink>
      </Checkbox>
      <Button big @click="$emit('next')">Next</Button>
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
  computed: {
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
