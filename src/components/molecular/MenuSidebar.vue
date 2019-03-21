<template>
  <div class="menu-sidebar">
    <div class="title">
      <Header type="tertiary" color="accent">ProjectCube.io</Header>
    </div>
    <LineHorizontal></LineHorizontal>
    <div class="content">
      <UserStatus></UserStatus>
    </div>
  </div>
</template>

<script>
import Paragraph from '../atomic/Paragraph.vue'
import Header from '../atomic/Header.vue'
import LineHorizontal from '../atomic/LineHorizontal.vue'
import UserStatus from './UserStatus.vue'

export default {
  name: "MenuSidebar",
  components: {
    Paragraph,
    Header,
    LineHorizontal,
    UserStatus
  }
}
</script>

<style lang="scss" scoped>
@import "../sharedStyles/shadows.scss";

.menu-sidebar {
  width: 20rem;
  height: 100vh;
  background-color: white;
  position: fixed;
  float: left;
  left: 0;
  top: 0;
  box-sizing: border-box;
  box-shadow: $shadow-default;

  .title {
    margin-left: 20px;
  }

  p {
    color: white;
  }

  .content {
    padding-left: 1rem;
  }
}


</style>
