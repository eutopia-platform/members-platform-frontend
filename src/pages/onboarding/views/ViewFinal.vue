<template>
  <ViewBase v-bind:img="image">
    <div>
      <Header type="secondary">
        That was easy!<br/>Find your teams first initiative: {{info.milestone}}
      </Header>
      <Paragraph>
        A milestone brings together the key aspects of a successful initiative - your teammates, objectives, key results, toolkits and frameworks so you and your team achieve more, important goals.
      </Paragraph>
      <div class="input-wrap">
        <Button @click="onSubmit">
          Find your initiative in Cubed
        </Button>
      </div>
    </div>
  </ViewBase>
</template>

<script>
import ViewBase from '../ViewBase.vue'

export default {
  name: "ViewFinal",
  extends: ViewBase,
  components: {
    ViewBase
  },
  computed: {
    image: () => require("../../../../data/img/onboarding/dashboard-3.svg")
  }
}
</script>
