<template>
  <ViewBase :img="image">
    <div>
      <Header secondary>
        What milestone are you working on at the moment?
      </Header>
      <Paragraph>
        A milestone brings together the key aspects of a successful initiative -
        your teammates, objectives, key results, toolkits and frameworks so you
        and your team achieve more, important goals.
      </Paragraph>
      <div class="input-wrap">
        <Input
          v-model="milestone"
          look="blend"
          placeholder="Your next big thing"
          :focus="true"
          @valueChange="onInputValueChange"
          @submit="onSubmit"
        />
        <Button big :disabled="!(milestone !== '')" @click="onSubmit"
          >Next</Button
        >
      </div>
    </div>
    <template v-slot:dashboard>
      <div>
        <Paragraph class="email">{{ info.emailShort }}</Paragraph>
        <Paragraph class="organization">{{ info.organization }}</Paragraph>
      </div>
    </template>
  </ViewBase>
</template>

<script>
import ViewBase from '../ViewBase.vue'

export default {
  name: 'ViewMilestone',
  components: {
    ViewBase,
  },
  extends: ViewBase,
  data: () => ({
    milestone: '',
  }),
  computed: {
    image: () => require('../../../../data/img/onboarding/dashboard-1.svg'),
  },
}
</script>
