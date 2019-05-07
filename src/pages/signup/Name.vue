<template>
  <SplitView :img-source="image">
    <Header secondary>What is the name of your company or startup?</Header>
    <template v-slot:content>
      <Input
        look="blend"
        placeholder="Are you the next Google?"
        :focus="true"
      />
      <Button big @click="$emit('next')">Next</Button>
    </template>
  </SplitView>
</template>

<script>
import SplitView from './SplitView'

export default {
  name: 'Name',
  components: {
    SplitView,
  },
  computed: {
    image: () => require('../../../data/img/onboarding/view-name.png'),
  },
}
</script>

<style lang="scss" scoped>
* {
  width: 100%;
  margin-bottom: 1.5rem;
}
</style>
