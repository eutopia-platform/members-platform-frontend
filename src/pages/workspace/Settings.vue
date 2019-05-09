<template>
  <div class="settings">
    <Header tertiary>
      Settings
    </Header>
    <div class="content">
      <Card>
        <div>
          <Header quaternary>Profile</Header>
          <LabeledInput
            v-model="user.name"
            label="name"
            :default-value="user.name"
            :size="20"
          ></LabeledInput>
          <LabeledInput
            v-model="user.callname"
            label="nickname"
            :default-value="user.callname"
            :size="20"
          ></LabeledInput>
          <Paragraph>ID: {{ user.id }}</Paragraph>
          <Button small @click="submitProfile">submit</Button>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Component from '/components/sharedScripts/component'
import LabeledInput from '/components/molecular/LabeledInput'

export default new Component({
  name: 'Settings',
  apollo: {
    user: gql`
      {
        user {
          name
          callname
          email
          id
        }
      }
    `,
  },
  components: {
    LabeledInput,
  },
  data: {
    user: {
      name: '',
      callName: '',
      email: '',
    },
    foo: '',
  },
  methods: {
    submitProfile: function() {
      this.$apollo.mutate({
        mutation: gql`
          mutation { 
            setName(name: "${this.user.name}" callname: "${
          this.user.callname
        }") {
              callname
            }
          }
        `,
        update: (store, { data: { setName } }) => {
          store.writeQuery({
            query: gql`
              {
                user {
                  callname
                }
              }
            `,
            data: { user: setName },
          })
        },
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.settings {
  display: flex;
  flex-direction: column;

  .content {
    margin-top: 1rem;
    flex-grow: 1;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 3vw;
  }
}
</style>
