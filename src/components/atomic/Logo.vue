<template>
  <div class="logo">
    <Header type="secondary">
      Productcube
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
@import "../sharedStyles/responsive.scss";

.logo {
  position: absolute;
  margin-top: 1rem;
  margin-left: 4rem;

  * {
    margin: 0;
  }

  @media screen and (max-width: $break-mobile) {
    margin-top: 0;
    margin-left: 0;

    & * {
      transform: scale(.5);
    }
  }
}
</style>
