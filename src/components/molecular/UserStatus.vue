<template>
  <div class="user-status" @click='logout'>
    <Icon :src="srcUser" class="user-icon"></Icon>
    <div class="right">
      <Paragraph>{{ user.callname }}</Paragraph>
      <Small>{{ user.email }}</Small>
    </div>
    <Icon :src="srcLogout" class="logout-icon"></Icon>
  </div>
</template>

<script>
import Paragraph from '../atomic/Paragraph.vue'
import Small from '../atomic/Small.vue'
import Icon from '../atomic/Icon.vue'
import gql from 'graphql-tag'

export default {
  name: 'UserStatus',
  components: {
    Paragraph,
    Small,
    Icon,
  },
  data: () => ({
    user: {
      email: 'unknown email',
      callname: 'unknown name'
    },
    srcUser: require('/../data/img/ui/user.svg'),
    srcLogout: require('/../data/img/ui/logout.svg')
  }),
  apollo: {
    user: {
      query: gql`{
        user {
          email
          callname
        }
      }`
    }
  },
  methods: {
    logout: function() {
      this.$apollo.provider.clients.auth.mutate({
        mutation: gql`
          mutation {
            logout(token: "${localStorage.getItem('sessionToken')}")
          }
        `
      }).then(() => {
        localStorage.removeItem('sessionToken')
        this.$router.push('/login')
      })
    }
  },
  components: {
    Paragraph,
    Small,
    Icon,
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
  border-radius: .5rem;
  overflow: hidden;
  margin-left: -.5rem;

  &:hover {
    border: 1px solid lightgray;
    .logout-icon {
      opacity: 1;
    }
  }

  .user-icon {
    height: 100%;
    width: 3rem;
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
    margin-left: .5rem;
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
