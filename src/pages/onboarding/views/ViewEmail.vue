<template>
  <ViewBase v-bind:img="image">
    <div>
      <Header type="secondary">
        Let's create your workspace
      </Header>
      <div class="input-wrap">
        <Input look="blend" placeholder="you-are-awesome@example.com"></Input>
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
  name: "ViewEmail",
  extends: ViewBase,
  components: {
    ViewBase
  },
  computed: {
    image: () => require("../../../../data/img/onboarding/view-email.png")
  }
}
</script>
