<template>
  <ViewBase v-bind:img="image">
    <div>
      <Header type="secondary">
        What milestone are you working on at the moment?
      </Header>
      <Paragraph>
        A milestone brings together the key aspects of a successful initiative - your teammates, objectives, key results, toolkits and frameworks so you and your team achieve more, important goals.
      </Paragraph>
      <div class="input-wrap">
        <Input look="blend" @valueChange="onInputValueChange" placeholder="Your next big thing"></Input>
        <Button @click="onSubmit">
          Next
        </Button>
      </div>
    </div>
  </ViewBase>
</template>

<script>
import ViewBase from '../ViewBase.vue'

export default {
  name: "ViewMilestone",
  extends: ViewBase,
  components: {
    ViewBase
  },
  computed: {
    image: () => require("../../../../data/img/onboarding/view-email.png")
  }
}
</script>
