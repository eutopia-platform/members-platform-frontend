<template>
  <ViewBase v-bind:img="image">
    <div>
      <Header type="secondary">
        Who else is working at {{ info }}?
      </Header>
      <div class="input-wrap">
        <Input look="blend" placeholder="asdf"></Input>
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
  name: "ViewMembers",
  extends: ViewBase,
  components: {
    ViewBase
  },
  computed: {
    image: () => require("../../../../data/img/onboarding/view-members.svg")
  }
}
</script>
