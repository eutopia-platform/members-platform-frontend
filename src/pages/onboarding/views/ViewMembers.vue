<template>
  <ViewBase v-bind:img="image">
    <div>
      <Header secondary>
        Who else is working at {{ info.organization }}?
      </Header>
      <div class="input-wrap">
        <Input v-for="(_, i) in members" look="blend" :name="String(i)" :placeholder=
          "placeholders[i % 3]" @valueChange="onInputValueChange" :focus="i === 0"></Input>
        <Button type="text" @click="addInput">+ add more team members</Button>
        <Button @click="onSubmit" :disabled="!isValid">
          Next
        </Button>
        <Button type="text" class="skip" @click="onSubmit">Or, skip for now</Button>
      </div>
    </div>
    <template v-slot:dashboard>
      <div>
        <Paragraph class="email">{{info.emailShort}}</Paragraph>
        <Paragraph class="organization">{{info.organization}}</Paragraph>
        <Paragraph class="ini-title">{{info.milestone}}</Paragraph>
        <Paragraph class="ini-icon">{{info.milestone}}</Paragraph>
      </div>
    </template>
  </ViewBase>
</template>

<script>
import ViewBase from '../ViewBase.vue'

export default {
  name: "ViewMembers",
  extends: ViewBase,
  data: () => ({
    members: ["", "", ""],
    isValid: false,
    placeholders: ['awesome-cofounder@example.com', 'awesome-colleague@example.com', 'awesome-mentor@example.com']
  }),
  components: {
    ViewBase
  },
  computed: {
    image: () => require("../../../../data/img/onboarding/dashboard-2.svg")
  },
  methods: {
    addInput: function() {
      this.members.push('')
    },
    onInputValueChange: function(payload) {
      this.text = payload // required for unblocking button
      this.members[parseInt(payload.name, 10)] = payload.value
      this.isValid = this.members.find(m => m.length > 0) !== undefined
    }
  }
}
</script>

<style lang="scss" scoped>
.text:not(.skip) {

  width: initial !important;
  position: relative;
  left: 100%;
  transform: translateX(-100%);

  &:hover {
    transform: translateX(-100%);
  }
}
</style>
