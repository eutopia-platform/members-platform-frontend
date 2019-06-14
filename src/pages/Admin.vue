<template>
  <div :class="getClass">
    <Loader v-if="$apollo.loading"></Loader>
    <template v-else>
      <Card v-if="user.role !== 'ADMIN'" class="no-admin">
        <Paragraph>You're not an admin.</Paragraph>
        <Small>Logged in as {{ user.name }} ({{ user.email }})</Small>
        <Paragraph>
          <RouterLink to="/login">switch account</RouterLink>
        </Paragraph>
      </Card>
      <template v-else>
        <RouterView></RouterView>
      </template>
    </template>
  </div>
</template>

<script>
import Component from '/scripts/component'
import LoginForm from '/components/molecular/LoginForm'
import gql from 'graphql-tag'

export default new Component({
  name: 'Admin',
  apollo: {
    user: gql`
      {
        user {
          name
          email
          role
        }
      }
    `,
  },
  data() {
    return {
      user: {
        name: '',
        email: '',
        role: null,
      },
    }
  },
  components: {
    LoginForm,
  },
})
</script>

<style lang="scss" scoped>
.admin {
  padding-left: 2rem;
  padding-right: 2rem;

  .no-admin,
  .loader {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  .no-admin {
    width: 20rem;
  }
}
</style>
