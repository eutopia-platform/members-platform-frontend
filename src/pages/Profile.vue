<template>
  <div :class="getClass">
    <div class="profile-box">
      <UserIcon :user-id="user.id"></UserIcon>
      <Header s3>{{ user.callname }}</Header>
      <Paragraph>({{ user.name }})</Paragraph>
      <Paragraph>{{ user.email }}</Paragraph>
      <Paragraph>joined {{ user.joined }}</Paragraph>
    </div>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import gql from 'graphql-tag'

export default new Component({
  name: 'Profile',
  apollo: {
    user: {
      query: gql`
        {
          user {
            name
            callname
            email
            id
            joined
          }
        }
      `,
      error(err) {
        if (err.message.includes('NOT_LOGGED_IN'))
          this.$router.push({
            name: 'login',
            params: { redirect: this.$route.path },
          })
        return true
      },
    },
  },
  data() {
    return {
      user: {
        name: '',
        callname: '',
        email: '',
        id: '',
      },
    }
  },
})
</script>

<style lang="scss" scoped>
.profile {
  .profile-box {
    width: 17rem;
    padding: 1rem;
    box-sizing: border-box;
    border-right: 1px solid black;

    .user-icon {
      width: 13rem;
      height: 13rem;
      display: block;
    }
  }
}
</style>
