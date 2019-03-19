<template>
  <div class="lp-vision">
    <Header type="primary">
      A toolkit for every aspect of your project.
    </Header>
    <Header type="secondary">
      <img class="image-right" src="../../../data/img/landingpage/step1.svg">
      Setup your vision
    </Header>
    <p>
      Define a concrete problem and user centered vision that you, your team
      and your customer believe in.
    </p>
    <hr/>
    <Header type="secondary">
      <img class="image-right" src="../../../data/img/landingpage/step2.svg">
      Develop your strategy
    </Header>
    <p>
      Make it feasable by evaluating the risk. Understand the
      vision/sustainability impact each potential strategy has.
    </p>
    <hr/>
    <Header type="secondary">
      <img class="image-right" src="../../../data/img/landingpage/step3.svg">
      Define your roadmap
    </Header>
    <p>
      Define the road of activity-focused initiatives, choose teams and
      highlight key results, so you know how to achieve your vision.
    </p>
    <hr/>
    <Header type="secondary">
      <img class="image-right" src="../../../data/img/landingpage/step4.svg">
      Measure and execute
    </Header>
    <p>
      Set SMART goals and turn objective key results into measurable, actionable
      steps so you achieve more important goals.
    </p>
  </div>
</template>

<script>
import Header from '../../components/atomic/Header.vue'

export default {
  name: "Vision",
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
  @import "../../components/sharedStyles/colors.scss";
  @import "../../components/sharedStyles/responsive.scss";

  .lp-vision {
    align-content: center;
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 2em;
    padding-left: 3em;
    margin-top: 3em;
    margin-bottom: 5em;

    @media screen and(min-width: $break-mobile + 1px) {
      // transform: translateY(-50%);
      position: relative;
    }

    .header-primary {
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
      background-color: $c-primary;
    }
  }
</style>
