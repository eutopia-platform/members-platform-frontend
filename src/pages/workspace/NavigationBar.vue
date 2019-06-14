<template>
  <Sidebar
    class="navigation"
    left
    collapsable
    @changeWidth="w => $emit('changeWidth', w)"
  >
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
      >
        {{ item.name }}
      </Item>
    </ul>
  </Sidebar>
</template>

<script>
import UserStatus from '/components/molecular/UserStatus'
import Brand from '/components/molecular/Brand'
import Item from './NavigationBarItem'
import WorkspaceIndicator from './WorkspaceIndicator'
import Sidebar from '/components/molecular/Sidebar'

export default {
  name: 'NavigationBar',
  components: {
    UserStatus,
    Brand,
    Item,
    WorkspaceIndicator,
    Sidebar,
  },
  computed: {
    workspace: function() {
      return this.$route.params.workspace
    },
    items: function() {
      return [
        {
          name: 'Dashboard',
          icon: require('/../data/img/workspace/navbar/dashboard.svg'),
          link: `/space/${this.workspace}`,
        },
        {
          name: 'Analytics',
          icon: require('/../data/img/workspace/navbar/analytics.svg'),
          link: `/space/${this.workspace}/analytics`,
        },
        {
          name: 'Toolkits',
          icon: require('/../data/img/workspace/navbar/toolkits.svg'),
          link: `/space/${this.workspace}/toolkits`,
        },
        {
          name: 'Processes',
          icon: require('/../data/img/workspace/navbar/processes.svg'),
          link: `/space/${this.workspace}/processes`,
        },
        {
          name: 'Settings',
          icon: require('/../data/img/workspace/navbar/settings.svg'),
          link: `/space/${this.workspace}/settings`,
        },
      ]
    },
  },
  methods: {
    openPage: function(link) {
      this.$router.push(link)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '/styles/colors.scss';
@import '/styles/shadows.scss';

.navigation {
  height: 100vh;
  box-sizing: border-box;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  user-select: none;
  z-index: 1000;

  @include colorScheme('surface');

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
