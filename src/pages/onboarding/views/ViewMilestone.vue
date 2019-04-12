<template>
  <ViewBase v-bind:img="image">
    <div>
      <Header secondary>What milestone are you working on at the moment?</Header>
      <Paragraph>A milestone brings together the key aspects of a successful initiative - your teammates, objectives, key results, toolkits and frameworks so you and your team achieve more, important goals.</Paragraph>
      <div class="input-wrap">
        <Input
          look="blend"
          v-model="milestone"
          @valueChange="onInputValueChange"
          @submit="onSubmit"
          placeholder="Your next big thing"
          :focus="true"
        ></Input>
        <Button @click="onSubmit" :disabled="!(milestone !== '')">Next</Button>
      </div>
    </div>
    <template v-slot:dashboard>
      <div>
        <Paragraph class="email">{{info.emailShort}}</Paragraph>
        <Paragraph class="organization">{{info.organization}}</Paragraph>
      </div>
    </template>
  </ViewBase>
</template>

<script>
import ViewBase from "../ViewBase.vue";

export default {
  name: "ViewMilestone",
  extends: ViewBase,
  components: {
    ViewBase
  },
  data: () => ({
    milestone: ""
  }),
  computed: {
    image: () => require("../../../../data/img/onboarding/dashboard-1.svg")
  }
};
</script>
