<template>
  <div class="lp-footer">
    <p>
      &copy; 2019 Projectpad
    </p>
    <router-link to="/privacy">
      Privacy Policy
    </router-link>
    <img class="image-right" src="../../../data/img/social/medium.svg">
    <img class="image-right" src="../../../data/img/social/twitter.svg">
    <img class="image-right" src="../../../data/img/social/facebook.svg">
    <img class="image-right" src="../../../data/img/social/linkedin.svg">
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
    height: 100px;
    background-color: $c-primary-really-intense;
    width: 100%;
    padding-left: 2em;
    padding-right: 2em;

    p, a {
      text-decoration: none;
      margin: 1em;
      margin-top: 0;
      margin-bottom: 0;
      color: white;
      float: left;
      text-align: center;
      line-height: 100px;
    }

    img {
      float: right;
      height: 2.5em;
      color: white;
      margin-left: .5em;
      margin-top: calc(100px / 2 - 2em / 2);
      filter: invert(100%); // TODO: get logos in right color

      &:nth-of-type(3) { // TODO: resize facebook logo
        height: calc(2.5em * 0.85);
        transform: translateY(2.5em * (1 - 0.85) / 2);
      }
    }
  }
</style>
