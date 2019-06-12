<template>
  <div :class="getClass">
    <div class="profile-box">
      <UserIcon :user-id="user.id"></UserIcon>
      <Header s3>{{ user.callname }}</Header>
      <Paragraph>({{ user.name }})</Paragraph>
      <Paragraph>{{ user.email }}</Paragraph>
      <Paragraph>joined {{ joinDate }}</Paragraph>
      <Paragraph v-if="user.role === 'ADMIN'">You are a Cube Admin</Paragraph>
    </div>
    <div class="workspace-list">
      <Invitation
        v-for="(name, i) in user.invitations"
        :key="i"
        class="invite"
        :space="name"
      ></Invitation>
      <Header s3>Workspaces</Header>
      <Paragraph v-for="(space, i) in workspaces" :key="i">
        <RouterLink :to="`/space/${space.name}`">{{ space.name }}</RouterLink>
      </Paragraph>
      <Paragraph v-if="workspaces.length === 0">
        You aren't a member of any workspace
      </Paragraph>
      <Button @click="$router.push('/new')">create new workspace</Button>
    </div>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import { formatDate, parseDate } from '/components/sharedScripts/date'
import Invitation from './profile/Invitation'
import gql from 'graphql-tag'

export default new Component({
  name: 'Profile',
  components: {
    Invitation,
  },
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
            invitations
            role
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
    workspaces: {
      query: gql`
        {
          workspaces {
            name
          }
        }
      `,
      client: 'work',
    },
  },
  data() {
    return {
      user: {
        name: '',
        callname: '',
        email: '',
        id: '',
        invitations: [],
        role: '',
      },
      workspaces: [],
    }
  },
  computed: {
    joinDate() {
      return this.user.joined ? formatDate(parseDate(this.user.joined)) : ''
    },
  },
})
</script>

<style lang="scss" scoped>
.profile {
  display: flex;

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

  .workspace-list {
    margin-left: 2rem;
    padding-top: 2rem;
  }
}
</style>
