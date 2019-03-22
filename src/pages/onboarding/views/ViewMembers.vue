<template>
  <ViewBase v-bind:img="image">
    <div>
      <Header type="secondary">
        Who else is working at {{ info.organization }}?
      </Header>
      <div class="input-wrap">
        <Input v-for="(_, i) in members" look="blend" :name="String(i)" :placeholder=
          "placeholders[i % 3]" @valueChange="onInputValueChange"></Input>
        <Button type="text" @click="addInput">+ add more team members</Button>
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
  name: "ViewMembers",
  extends: ViewBase,
  data: () => ({
    members: ["", "", ""],
    placeholders: ['awesome-cofounder@example.com', 'awesome-colleague@example.com', 'awesome-mentor@example.com']
  }),
  components: {
    ViewBase
  },
  computed: {
    image: () => require("../../../../data/img/onboarding/dashboard-1.svg")
  },
  methods: {
    addInput: function() {
      this.members.push('')
    },
    onInputValueChange: function(payload) {
      this.text = payload // required for unblocking button
      this.members[parseInt(payload.name, 10)] = payload.value
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  width: initial !important;
  position: relative;
  left: 100%;
  transform: translateX(-100%);

  &:hover {
    transform: translateX(-100%);
  }
}
</style>
