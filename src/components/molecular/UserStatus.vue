<template>
  <div class="user-status">
    <img class="profile-picture" src="https://via.placeholder.com/150"/>
    <div class="text-section">
      <Paragraph class="name">
        John Doe
      </Paragraph>
      <Paragraph class="email">
        john.doe@foo.com
      </Paragraph>
    </div>
  </div>
</template>

<script>
import Paragraph from '../atomic/Paragraph.vue'

export default {
  name: "UserStatus",
  components: {
    Paragraph
  }
}
</script>

<style lang="scss" scoped>
.user-status {
  width: 15rem;
  height: 50px;
  background-color: black;
  display: flex;
  flex-direction: row;

  .profile-picture {
    height: 50px;
    width: 50px;
  }

  .text-section {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    background-color: gray;
  }
}
</style>
