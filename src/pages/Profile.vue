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
        :key="`invite${i}`"
        class="invite"
        :space="name"
      ></Invitation>
      <Header s3>Workspaces</Header>
      <Paragraph v-for="(space, i) in workspaces" :key="`space${i}`">
        <RouterLink :to="`/space/${space.name}`">{{ space.name }}</RouterLink>
      </Paragraph>
      <Paragraph v-if="workspaces.length === 0">
        You aren't a member of any workspace
      </Paragraph>
      <Button outlined @click="$router.push('/new')">
        create new workspace
      </Button>
    </div>
  </div>
</template>

<script>
import Component from '~/scripts/component'
import { formatDate, parseDate } from '~/scripts/date'
import Invitation from './profile/Invitation'
import { mapState, mapActions } from 'vuex'

export default new Component({
  name: 'Profile',
  components: {
    Invitation,
  },
  computed: {
    ...mapState('user', { user: 'info' }),
    ...mapState('workspace', ['workspaces']),
    joinDate() {
      return this.user.joined ? formatDate(parseDate(this.user.joined)) : ''
    },
  },
  created() {
    this.loadUserWorkspaces()
  },
  methods: mapActions('workspace', ['loadUserWorkspaces']),
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
