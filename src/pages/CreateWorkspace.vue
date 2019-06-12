<template>
  <div :class="getClass">
    <Card>
      <Header s2>Create Workspace</Header>
      <div class="reject-box">
        <Paragraph>{{ rejectMessage }}</Paragraph>
      </div>
      <ActionInput
        v-model="name"
        label="workspace name"
        button="continue"
        @submit="onSubmit"
      ></ActionInput>
    </Card>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import ActionInput from '/components/molecular/ActionInput'
import gql from 'graphql-tag'

export default new Component({
  name: 'CreateWorkspace',
  components: {
    ActionInput,
  },
  data() {
    return {
      rejectMessage: '',
      name: '',
    }
  },
  methods: {
    onSubmit() {
      this.$apollo
        .mutate({
          client: 'work',
          mutation: gql`
            mutation newWorkspace($name: String!) {
              createWorkspace(name: $name) {
                name
              }
            }
          `,
          variables: {
            name: this.name,
          },
        })
        .then(({ data: { createWorkspace: { name } } }) => {
          this.$router.push(`/space/${name}`)
        })
        .catch(({ message }) => {
          if (message.includes('ALREADY_EXISTS')) {
            this.rejectMessage = 'workspace already exists'
          }
        })
    },
  },
})
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/colors';

.create-workspace {
  .card {
    width: 20rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);

    .reject-box {
      height: 2rem;
      color: color('error');

      * {
        margin: 0;
      }
    }
  }
}
</style>
