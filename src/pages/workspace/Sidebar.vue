<template>
  <div class="sidebar">
    <div class="title">
      <Header type="tertiary">ProjectCube.io</Header>
    </div>
    <LineHorizontal></LineHorizontal>
    <div class="content">
      <UserStatus></UserStatus>
      <IniList></IniList>
    </div>
  </div>
</template>

<script>
import Paragraph from '../../components/atomic/Paragraph.vue'
import Header from '../../components/atomic/Header.vue'
import LineHorizontal from '../../components/atomic/LineHorizontal.vue'
import UserStatus from '../../components/molecular/UserStatus.vue'
import IniList from './IniList.vue'

export default {
  name: "MenuSidebar",
  components: {
    Paragraph,
    Header,
    LineHorizontal,
    UserStatus,
    IniList
  }
}
</script>

<style lang="scss" scoped>
@import "../../components/sharedStyles/shadows.scss";

.sidebar {
  width: 20rem;
  height: 100vh;
  position: fixed;
  float: left;
  left: 0;
  top: 0;
  box-sizing: border-box;
  box-shadow: $shadow-default;

  .title {
    margin-left: 20px;
  }

  .content {
    padding-left: 1rem;
  }
}


</style>
