<template>
  <SplitView :img-source="image">
    <Header secondary>What milestone are you working on at the moment?</Header>
    <Paragraph>
      A milestone brings together the key aspects of a successful initiative -
      your teammates, objectives, key results, toolkits and frameworks so you
      and your team achieve more, important goals.
    </Paragraph>
    <template v-slot:content>
      <Input look="blend" placeholder="Your next big thing" :focus="true" />
      <Button big @click="$emit('next')">Next</Button>
    </template>
  </SplitView>
</template>

<script>
import SplitView from './SplitView'

export default {
  name: 'Milestone',
  components: {
    SplitView,
  },
  computed: {
    image: () => require('../../../data/img/onboarding/dashboard-1.svg'),
  },
}
</script>

<style lang="scss" scoped>
* {
  width: 100%;
  margin-bottom: 1.5rem;
}
</style>
