<template>
  <ViewBase :img="image">
    <div>
      <Header secondary>Who else is working at {{ info.organization }}?</Header>
      <div class="input-wrap">
        <Input
          v-for="(_, i) in members"
          :key="i"
          blend
          :name="String(i)"
          :placeholder="placeholders[i % 3]"
          :focus="i === 0"
          @valueChange="onInputValueChange"
        />
        <Button text @click="addInput">+ add more team members</Button>
        <Button big :disabled="!isValid" @click="onSubmit">Next</Button>
        <Button text class="skip" @click="onSubmit">Or, skip for now</Button>
      </div>
    </div>
    <template v-slot:dashboard>
      <div>
        <Paragraph class="email">{{ info.emailShort }}</Paragraph>
        <Paragraph class="organization">{{ info.organization }}</Paragraph>
        <Paragraph class="ini-title">{{ info.milestone }}</Paragraph>
        <Paragraph class="ini-icon">{{ info.milestone }}</Paragraph>
      </div>
    </template>
  </ViewBase>
</template>

<script>
import ViewBase from '../ViewBase.vue'

export default {
  name: 'ViewMembers',
  components: {
    ViewBase,
  },
  extends: ViewBase,
  data: () => ({
    members: ['', '', ''],
    isValid: false,
    placeholders: [
      'awesome-cofounder@example.com',
      'awesome-colleague@example.com',
      'awesome-mentor@example.com',
    ],
  }),
  computed: {
    image: () => require('../../../../data/img/onboarding/dashboard-2.svg'),
  },
  methods: {
    addInput: function() {
      this.members.push('')
    },
    onInputValueChange: function(payload) {
      this.text = payload // required for unblocking button
      this.members[parseInt(payload.name, 10)] = payload.value
      this.isValid = this.members.find(m => m.length > 0) !== undefined
    },
  },
}
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/colors';

.button.text {
  color: map-get($colors, 'neutral-font');
  font-size: 0.7rem;
}
</style>
