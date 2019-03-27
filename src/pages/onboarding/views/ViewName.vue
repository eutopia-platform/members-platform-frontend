<template>
  <ViewBase :img="image">
    <div>
      <Header type="secondary">
        What is the name of your company or startup?
      </Header>
      <div class="input-wrap">
        <Input
          look="blend"
          placeholder="Are you the next Google?"
          :focus="true"
          @valueChange="onInputValueChange"
          @submit="onSubmit"
        ></Input>
        <Button :disabled="!inputValid" @click="onSubmit">
          Next
        </Button>
      </div>
    </div>
  </ViewBase>
</template>

<script>
import ViewBase from "../ViewBase.vue";

export default {
  name: "ViewName",
  components: {
    ViewBase
  },
  extends: ViewBase,
  computed: {
    image: () => require("../../../../data/img/onboarding/view-name.png")
  }
};
</script>
