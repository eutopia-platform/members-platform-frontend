<template>
  <SplitView :img="image">
    <Header secondary>
      That was easy!
      <br />
      Find your teams first initiative:
      {{ info.milestone }}
    </Header>
    <Paragraph>
      Validate your assumptions, become clear about the user, the problem you
      are solving so you get to product market fit asap - all with powerful
      product toolkits. Time to scale your startup!
    </Paragraph>
    <template v-slot:content>
      <Button big @click="$emit('next')"
        >Find your initiative in Productcube</Button
      >
    </template>
  </SplitView>
</template>

<script>
import SplitView from './SplitView'

export default {
  name: 'Done',
  components: {
    SplitView,
  },
  data: () => ({
    info: {
      milestone: 'MILESTONE',
    },
  }),
  computed: {
    image: () => require('../../../data/img/onboarding/dashboard-1.svg'),
  },
}
</script>
