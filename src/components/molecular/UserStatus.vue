<template>
  <div class="user-status" @click="logout">
    <UserIcon :user-id="user.id"></UserIcon>
    <div class="right">
      <Paragraph>{{ user.callname }}</Paragraph>
      <Small>{{ user.email }}</Small>
    </div>
    <Icon :src="srcLogout" class="logout-icon"></Icon>
  </div>
</template>

<script>
import currentUserQuery from '~/gql/user'
import logout from '~/scripts/logout'

export default {
  name: 'UserStatus',
  apollo: {
    user: currentUserQuery,
  },
  data() {
    return {
      srcLogout: require('/../data/img/ui/logout.svg'),
      user: {
        id: '',
        email: '',
        callname: '',
      },
    }
  },
  methods: {
    logout() {
      logout(this)
    },
  },
}
</script>

<style lang="scss" scoped>
.user-status {
  height: 3rem;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  box-sizing: border-box;
  cursor: pointer;
  overflow: hidden;
  margin-left: -0.5rem;

  &:hover {
    border: 1px solid lightgray;
    .logout-icon {
      opacity: 1;
    }
  }

  .user-icon {
    height: 100%;
    width: 3rem;
    margin: 0;
  }

  .logout-icon {
    height: 2rem;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 1rem;
    opacity: 0;
  }

  .right {
    margin-left: 0.5rem;
    height: 100%;
    box-sizing: border-box;
    padding: 0.2rem;
    display: flex;
    flex-direction: column;

    * {
      margin: 0;
      flex-grow: 1;
      display: border-box;
    }
  }
}
</style>
