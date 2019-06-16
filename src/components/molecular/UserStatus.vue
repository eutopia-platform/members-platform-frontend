<template>
  <div class="user-status" @click="logout">
    <UserIcon :user-id="info.id"></UserIcon>
    <div class="right">
      <Paragraph>{{ info.callname }}</Paragraph>
      <Small>{{ info.email }}</Small>
    </div>
    <Icon :src="srcLogout" class="logout-icon"></Icon>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'UserStatus',
  data() {
    return {
      srcLogout: require('/../data/img/ui/logout.svg'),
    }
  },
  computed: mapState('user', ['info']),
  methods: mapActions('user', ['logout']),
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
