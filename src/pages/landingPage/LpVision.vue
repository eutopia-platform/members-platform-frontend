<template>
  <div class="lp-vision">
    <Header type="primary">
      Vision driven project plan
    </Header>
    <Header type="secondary">
      1. Setup your vision
    </Header>
    <p>
      Define a concrete problem and user centered vision that you, your team
      and your customer believe in.
    </p>
    <hr/>
    <Header type="secondary">
      2. Develop a strategy
    </Header>
    <p>
      Make it feasable by evaluating the risk. Understand the
      vision/sustainability impact each potential strategy has.
    </p>
    <hr/>
    <Header type="secondary">
      3. Create your roadmap
    </Header>
    <p>
      Start activity-focused initiatives, choose teams and highlight key
      results, to achieve the right goals at the right time.
    </p>
    <hr/>
    <Header type="secondary">
      4. Execute and measure
    </Header>
    <p>
      The final step to finish a vision driven product plan is to transform key
      results into measurable metrics, hypothesis and tasks.
    </p>
  </div>
</template>

<script>
import Header from '../../components/atomic/Header.vue'

const LpVision = {
  name: "LpVision",
  components: {
    Header
  }
}
export default LpVision
</script>

<style lang="scss" scoped>
  @import "../../components/sharedStyles/colors.scss";

  .lp-vision {
    align-content: center;
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 2em;
    padding-left: 3em;
    top: 50%;
    transform: translateY(-50%);
    position: relative;

    .header-primary {
      // margin-top: 1em;
      margin-bottom: 1.5em;
    }

    .header-secondary {
      margin-top: 1em;
    }

    hr {
      height: .4em;
      border-radius: .2em;
      width: 30%;
      left: 0;
      margin-left: 0;
      margin-top: 2em;
      margin-bottom: 2em;
      border: none;
      background-color: $c-primary-intense;
    }
  }
</style>
