<template>
  <div class="logo">
    <Header type="secondary">
      cubed
    </Header>
  </div>
</template>

<script>
import Header from './Header.vue'

export default {
  name: "Logo",
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
.logo {
  margin: 0;
  * {
    margin: 0;
  }
}
</style>
