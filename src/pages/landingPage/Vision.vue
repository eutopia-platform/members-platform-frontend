<template>
<div class="lp-vision">
  <div class="section-title">
    <Header type="primary">
      A toolkit for every aspect of your project.
    </Header>
  </div>
  <div class="vision-title">
    <Header type="secondary">
      <Icon v-bind:src="img1" height="23px"></Icon>
      Setup your vision
    </Header>
  </div>
  <p>
    Define a concrete problem and user centered vision that you, your team
    and your customer believe in.
  </p>
  <hr />
  <div class="vision-title">
    <Header type="secondary">
      <Icon v-bind:src="img2" height="23px"></Icon>
      Develop your strategy
    </Header>
  </div>
  <p>
    Make it feasable by evaluating the risk. Understand the
    vision/sustainability impact each potential strategy has.
  </p>
  <hr />
  <div class="vision-title">
    <Header type="secondary">
      <Icon v-bind:src="img3" height="23px"></Icon>
      Define your roadmap
    </Header>
  </div>
  <p>
    Define the road of activity-focused initiatives, choose teams and
    highlight key results, so you know how to achieve your vision.
  </p>
  <hr />
  <div class="vision-title">
    <Header type="secondary">
      <Icon v-bind:src="img4" height="23px"></Icon>
      Measure and execute
    </Header>
  </div>
  <p>
    Set SMART goals and turn objective key results into measurable, actionable
    steps so you achieve more important goals.
  </p>
</div>
</template>

<script>
import Header from '../../components/atomic/Header.vue'
import Icon from '../../components/atomic/Icon.vue'

export default {
  name: "Vision",
  components: {
    Header,
    Icon
  },
  computed: {
    img1: () => require("../../../data/img/landingpage/step1.svg"),
    img2: () => require("../../../data/img/landingpage/step2.svg"),
    img3: () => require("../../../data/img/landingpage/step3.svg"),
    img4: () => require("../../../data/img/landingpage/step4.svg")
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
    padding: 2em 2em 2em 3em;
    margin-top: 3em;
    margin-bottom: 5em;

    @media screen and(min-width: $break-mobile + 1px) {
        position: relative;
    }

    .section-title {
        margin-bottom: 4rem;
    }

    .vision-title {
      margin-top: 3rem;
    }

    hr {
        height: 0.4em;
        border-radius: 0.2em;
        width: 30%;
        left: 0;
        margin-left: 0;
        margin-top: 2em;
        margin-bottom: 2em;
        border: none;
    }
}
</style>
