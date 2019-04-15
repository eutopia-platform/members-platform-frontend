<template>
  <div class="user-status">
    <Icon :src='pic' class='user-icon' height='100px' height='100px'></Icon>
    <div class='right'>
      <Paragraph>{{name}}</Paragraph>
      <Small>{{email}}</Small>
    </div>
  </div>
</template>

<script>
import Paragraph from '../atomic/Paragraph.vue'
import Small from '../atomic/Small.vue'
import Icon from '../atomic/Icon.vue'

export default {
  name: 'UserStatus',
  data: () => ({
    name: 'unknown name',
    email: 'unknown email',
    pic: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcvm7dfwAHSwMUPdgKUQAAAABJRU5ErkJggg=='
  }),
  components: {
    Paragraph,
    Small,
    Icon
  }
}
</script>

<style lang="scss" scoped>
.user-status {
  height: 3rem;
  display: flex;
  flex-direction: row;
  white-space: nowrap;

  .user-icon {
    height: 100%;
    width: 3rem;
  }

  .right {
    margin-left: 1rem;
    height: 100%;
    box-sizing: border-box;
    padding: .2rem;
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
