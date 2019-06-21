<template>
  <div :class="getClass">
    <Paragraph>
      You have been invited to join the
      <b>{{ space }}</b>
      workspace.
    </Paragraph>
    <div class="button-wrap">
      <Button outlined @click="declineInvitation(space)">decline</Button>
      <Button outlined @click="acceptInvitation(space)">accept</Button>
    </div>
  </div>
</template>

<script>
import Component from '~/scripts/component'
import { mapActions } from 'vuex'

export default new Component({
  name: 'Invitation',
  props: {
    space: {
      type: String,
      required: true,
    },
  },
  methods: mapActions('user', ['declineInvitation', 'acceptInvitation']),
})
</script>

<style lang="scss" scoped>
.invitation {
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-right: 2rem;
  padding-left: 2rem;
  height: 5rem;
  align-items: center;

  * {
    margin: 0;
  }
  .button-wrap {
    margin-left: 2rem;
    display: flex;
    .button {
      margin-left: 1rem;
    }
  }
}
</style>
