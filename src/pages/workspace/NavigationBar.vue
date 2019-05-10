<template>
  <aside class="navigation">
    <Brand></Brand>
    <WorkspaceIndicator></WorkspaceIndicator>
    <UserStatus class="status"></UserStatus>
    <ul class="pages">
      <Item
        v-for="item in items"
        :key="items.indexOf(item)"
        :icon="item.icon"
        :link="item.link"
        @open="openPage"
        >{{ item.name }}</Item
      >
    </ul>
  </aside>
</template>

<script>
import UserStatus from '/components/molecular/UserStatus'
import Brand from '/components/molecular/Brand'
import Item from './NavigationBarItem'
import WorkspaceIndicator from './WorkspaceIndicator'

export default {
  name: 'NavigationBar',
  components: {
    UserStatus,
    Brand,
    Item,
    WorkspaceIndicator,
  },
  data: () => ({
    items: [
      {
        name: 'Dashboard',
        icon: require('/../data/img/workspace/navbar/dashboard.svg'),
        link: '/workspace',
      },
      {
        name: 'Analytics',
        icon: require('/../data/img/workspace/navbar/analytics.svg'),
        link: '/workspace/analytics',
      },
      {
        name: 'Toolkits',
        icon: require('/../data/img/workspace/navbar/toolkits.svg'),
        link: '/workspace/toolkits',
      },
      {
        name: 'Processes',
        icon: require('/../data/img/workspace/navbar/processes.svg'),
        link: '/workspace/processes',
      },
      {
        name: 'Settings',
        icon: require('/../data/img/workspace/navbar/settings.svg'),
        link: '/workspace/settings',
      },
    ],
  }),
  methods: {
    openPage: function(link) {
      this.$router.push(link)
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'src/components/sharedStyles/colors.scss';

.navigation {
  position: fixed;
  width: 30vw;
  height: 100vh;
  box-sizing: border-box;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  user-select: none;

  @media screen and (min-width: 1000px) {
    width: 300px;
  }

  @include colorScheme('neutral');

  .brand {
    margin-top: 1rem;
  }

  .status,
  .workspace-indicator {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .pages {
    list-style-type: none;
    padding: 0;
  }
}
</style>
