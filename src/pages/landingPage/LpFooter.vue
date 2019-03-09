<template>
  <div class="lp-footer">
    <p>
      &copy; 2019 Projectpad
    </p>
    <p>
      Imprint
    </p>
    <p>
      Terms of Service
    </p>
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
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding-left: 2em;
    padding-right: 2em;

    p {
      color: white;
      float: left;
      flex-grow: 1;
      text-align: center;
    }
  }
</style>
