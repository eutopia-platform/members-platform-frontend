<template>
  <ViewBase v-bind:img="image">
    <div>
      <Header type="secondary">
        What is the name of your company or startup?
      </Header>
      <div class="input-wrap">
        <Input look="blend" @valueChange="onInputValueChange" placeholder="Are you the next Google?"></Input>
        <Button @click="onSubmit" :disabled="!inputValid">
          Next
        </Button>
      </div>
    </div>
  </ViewBase>
</template>

<script>
import ViewBase from '../ViewBase.vue'

export default {
  name: "ViewName",
  extends: ViewBase,
  components: {
    ViewBase
  },
  computed: {
    image: () => require("../../../../data/img/onboarding/view-name.png")
  }
}
</script>
