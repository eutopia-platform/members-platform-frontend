<template>
  <SplitView :imgSource="image">
  <Header secondary>Who else is working at {{org}}?</Header>
  <template v-slot:content>
    <Input look="blend" placeholder="awesome-cofounder@example.com" :focus="true" />
    <Input look="blend" placeholder="awesome-colleague@example.com" />
    <Input look="blend" placeholder="awesome-mentor@example.com" />
    <Button text>+ add more team members</Button>
    <Button big @click="$emit('next')">Next</Button>
    <Button text>Or, skip for now</Button>
  </template>
  </SplitView>
</template>

<script>
import SplitView from './SplitView'

export default {
  name: 'Members',
  components: {
    SplitView,
  },
  computed: {
    image: () => require('../../../data/img/onboarding/dashboard-2.svg'),
  },
  props: {
    org: {
      type: String,
      default: 'unknown organization',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../components/sharedStyles/colors';

* {
  width: 100%;
  margin-bottom: 1.5rem;
}

.button.text {
  color: map-get($colors, 'neutral-font');
  font-size: 0.7rem;
}
</style>
