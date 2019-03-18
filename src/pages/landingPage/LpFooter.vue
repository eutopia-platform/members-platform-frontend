<template>
  <div class="lp-footer">
    <div class="foot1">
      <p>
        &copy; 2019 Projectpad
      </p>
      <router-link to="/privacy">
        Privacy Policy
      </router-link>
    </div>
    <div class="foot2">
      <img class="image-right" src="../../../data/img/social/medium.svg">
      <img class="image-right" src="../../../data/img/social/twitter.svg">
      <img class="image-right" src="../../../data/img/social/facebook.svg">
      <img class="image-right" src="../../../data/img/social/linkedin.svg">
    </div>
  </div>
</template>

<script>
  const LpFooter = {
    name: "LpFooter",
    components: {
    }
  }
  export default LpFooter
</script>

<style lang="scss" scoped>
  @import "../../components/sharedStyles/colors.scss";

  .lp-footer {
    box-sizing: border-box;
    width: 100%;
    min-height: 100px;
    background-color: $c-primary-dark;
    width: 100%;
    padding-left: 2em;
    padding-right: 2em;
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-between;
    align-items: center;

    .foot1, .foot2 {
      height: 80px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }

    p, a {
      text-decoration: none;
      margin: 1em;
      margin-top: 0;
      margin-bottom: 0;
      color: white;
      float: left;
      text-align: center;
      white-space: nowrap;
    }

    img {
      height: 2.5em;
      color: white;
      margin-left: .5em;
      filter: invert(100%); // TODO: get logos in right color

      &:nth-of-type(3) { // TODO: resize facebook logo
        height: calc(2.5em * 0.85);
      }
    }
  }
</style>
