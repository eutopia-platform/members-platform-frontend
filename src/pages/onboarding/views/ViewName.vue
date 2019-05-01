<template>
  <ViewBase :img="image">
    <div>
      <Header secondary>What is the name of your company or startup?</Header>
      <div class="input-wrap">
        <Input
          v-model="name"
          look="blend"
          placeholder="Are you the next Google?"
          :focus="true"
          @valueChange="onInputValueChange"
          @submit="onSubmit"
        />
        <Button big :disabled="!(name !== '')" @click="onSubmit">Next</Button>
      </div>
    </div>
  </ViewBase>
</template>

<script>
import ViewBase from '../ViewBase.vue'

export default {
  name: 'ViewName',
  components: {
    ViewBase,
  },
  extends: ViewBase,
  data: () => ({
    name: '',
  }),
  computed: {
    image: () => require('../../../../data/img/onboarding/view-name.png'),
  },
}
</script>
