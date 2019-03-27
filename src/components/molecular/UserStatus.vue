<template>
  <div class="user-status">
    <Icon src="https://via.placeholder.com/150" height="50px" height="50px">test</Icon>
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
import Icon from '../atomic/Icon.vue'

export default {
  name: "UserStatus",
  components: {
    Paragraph,
    Small,
    Icon
  }
}
</script>

<style lang="scss" scoped>
.user-status {
  width: 15rem;
  height: 50px;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;

  .text-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1rem;
  }
}
</style>
