<template>
  <Card :class="getClass">
    <Header s3>What is your name?</Header>
    <LabeledInput
      v-model="name"
      label="full name"
      :default-value="user.name"
    ></LabeledInput>
    <LabeledInput
      v-model="callname"
      label="display name"
      :default-value="user.callname"
    ></LabeledInput>
    <Button primary @click="submit">continue</Button>
  </Card>
</template>

<script>
import Component from '/scripts/component'
import LabeledInput from '/components/molecular/LabeledInput'
import gql from 'graphql-tag'

export default new Component({
  name: 'Step2',
  components: {
    LabeledInput,
  },
  apollo: {
    $client: 'user',
    user: {
      query: gql`
        {
          user {
            id
            name
            callname
            email
          }
        }
      `,
      result({
        data: {
          user: { callname, name },
        },
      }) {
        this.callname = callname
        this.name = name
      },
      fetchPolicy: 'network-only',
    },
  },
  data() {
    return {
      name: '',
      callname: '',
      user: {
        name: '',
        callname: '',
      },
    }
  },
  methods: {
    submit() {
      this.$apollo
        .mutate({
          mutation: gql`
            mutation signupName($name: String!, $callname: String!) {
              setName(name: $name, callname: $callname) {
                name
                callname
              }
            }
          `,
          variables: {
            name: this.name,
            callname: this.callname,
          },
        })
        .then(() => this.$router.push('/profile'))
    },
  },
})
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/colors';

.step2 {
  width: 20rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);

  .labeled-input {
    width: 100%;
  }

  .header {
    margin-bottom: 3rem;
  }

  .button {
    margin-top: 2rem;
    width: 100%;
  }
}
</style>
