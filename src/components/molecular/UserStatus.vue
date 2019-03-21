<template>
  <div class="user-status">
    <img class="profile-picture" src="https://via.placeholder.com/150"/>
    <div class="text-section">
      <Paragraph class="name">
        John Doe
      </Paragraph>
      <Small class="email">
        john.doe@foo.com
      </Small>
    </div>
  </div>
</template>

<script>
import Paragraph from '../atomic/Paragraph.vue'
import Small from '../atomic/Small.vue'

export default {
  name: "UserStatus",
  components: {
    Paragraph,
    Small
  }
}
</script>

<style lang="scss" scoped>
.user-status {
  width: 15rem;
  height: 50px;
  display: flex;
  flex-direction: row;

  .profile-picture {
    height: 50px;
    width: 50px;
  }

  .text-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1rem;
  }
}
</style>
