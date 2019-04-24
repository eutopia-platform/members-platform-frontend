<template>
  <div class="footer">
    <div class="foot1">
      <p>&copy; 2019 Productcube</p>
      <RouterLink to="/privacy">Privacy Policy</RouterLink>
    </div>
    <div class="foot2">
      <img class="image-right" src="../../../data/img/social/medium.svg" />
      <img class="image-right" src="../../../data/img/social/twitter.svg" />
      <img class="image-right" src="../../../data/img/social/facebook.svg" />
      <img class="image-right" src="../../../data/img/social/linkedin.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  components: {},
}
</script>

<style lang="scss" scoped>
@import '../../components/sharedStyles/colors.scss';

.footer {
  @include colorScheme('tertiary');

  box-sizing: border-box;
  width: 100%;
  min-height: 100px;
  width: 100%;
  padding-left: 2em;
  padding-right: 2em;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  align-items: center;

  .foot1,
  .foot2 {
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  p,
  a {
    color: inherit;
    text-decoration: none;
    margin: 1em;
    margin-top: 0;
    margin-bottom: 0;
    float: left;
    text-align: center;
    white-space: nowrap;
  }

  img {
    height: 2.5em;
    margin-left: 0.5em;
    filter: invert(100%); // TODO: get logos in right color

    &:nth-of-type(3) {
      // TODO: resize facebook logo
      height: calc(2.5em * 0.85);
    }
  }
}
</style>
