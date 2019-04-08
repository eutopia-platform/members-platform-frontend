<template>
  <ViewBase v-bind:img="image">
    <div>
      <Header type="secondary">What is the name of your company or startup?</Header>
      <div class="input-wrap">
        <Input
          look="blend"
          v-model="name"
          @valueChange="onInputValueChange"
          @submit="onSubmit"
          placeholder="Are you the next Google?"
          :focus="true"
        ></Input>
        <Button @click="onSubmit" :disabled="!(name !== '')">Next</Button>
      </div>
    </div>
  </ViewBase>
</template>

<script>
import ViewBase from "../ViewBase.vue";
import Input from "~/components/atomic/Input";
import Button from "~/components/atomic/Button";

export default {
  name: "ViewName",
  extends: ViewBase,
  data: () => ({
    name: ""
  }),
  components: {
    ViewBase
  },
  computed: {
    image: () => require("../../../../data/img/onboarding/view-name.png")
  }
};
</script>
