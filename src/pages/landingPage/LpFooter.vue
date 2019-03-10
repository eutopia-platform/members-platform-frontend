<template>
  <div class="lp-footer">
    <p>
      &copy; 2019 Projectpad
    </p>
    <router-link to="/privacy">
      Privacy Policy
    </router-link>
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
      color: white;
      float: left;
      text-align: center;
      line-height: 100px;
    }
  }
</style>
