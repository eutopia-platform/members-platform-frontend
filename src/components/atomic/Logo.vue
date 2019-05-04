<template>
  <div class="logo">
    <Header secondary>
      Productcube
    </Header>
  </div>
</template>

<script>
export default {
  name: 'Logo',
}
</script>

<style lang="scss" scoped>
@import '../sharedStyles/responsive.scss';

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
      transform: scale(0.5);
    }
  }
}
</style>
