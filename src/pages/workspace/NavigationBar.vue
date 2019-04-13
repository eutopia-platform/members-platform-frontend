<template>
  <div class='navigation'>
    <Brand></Brand>
    <UserStatus class='status'></UserStatus>
    </ul>
    <ul class='pages'>
      <Item v-for='item in items' :icon='item.icon' :link='item.link'
        @open='openPage'>
        {{item.name}}
      </Item>
    </ul>
  </div>
</template>

<script>
import UserStatus from '/components/molecular/UserStatus'
import Brand from '/components/atomic/Brand'
import Item from './NavigationBarItem'

export default {
  name: 'NavigationBar',
  components: {
    UserStatus,
    Brand,
    Item
  },
  methods: {
    openPage: function(link) {
      this.$router.push(link)
    }
  },
  data: () => ({
    items: [
      {
        name: 'Dashboard',
        icon: require('/../data/img/workspace/navbar/dashboard.svg'),
        link: '/workspace'
      },
      {
        name: 'Toolkits',
        icon: require('/../data/img/workspace/navbar/toolkits.svg'),
        link: '/workspace/toolkits'
      },
      {
        name: 'Settings',
        icon: require('/../data/img/workspace/navbar/settings.svg'),
        link: '/workspace/settings'
      }
    ]
  }),
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
  border-right: #444 solid 1px;

  @media screen and (min-width: 1150px) {
    width: 345px;
  }

  @include colorScheme('neutral');

  .status {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .pages {
    list-style-type: none;
    padding: 0;
  }
}
</style>
