<template>
  <div class="landing-page">
    <PageSlide>
      <template v-slot>
        <SplitViewHorizontal>
          <template v-slot:left>
            <LpWelcome></LpWelcome>
          </template>
          <template v-slot:right>
            <img class="image-right" src="../../data/img/landingpage/slide1.svg">
          </template>
        </SplitViewHorizontal>
      </template>
    </PageSlide>

    <PageSlide>
      <SplitViewHorizontal>
        <template v-slot:left>
          <LpVision></LpVision>
        </template>
        <template v-slot:right>
          <img class="image-right" src="../../data/img/landingpage/slide2.svg">
        </template>
      </SplitViewHorizontal>
    </PageSlide>

    <PageSlide>
      <SplitViewHorizontal>
        <template v-slot:left>
          <LpPricing></LpPricing>
        </template>
        <template v-slot:right>
          <img class="image-right" src="../../data/img/landingpage/slide3.svg">
        </template>
      </SplitViewHorizontal>
    </PageSlide>

    <PageSlide>
      <LpContact></LpContact>
    </PageSlide>

    <LpFooter></LpFooter>
  </div>
</template>

<script>
import PageSlide from "../components/atomic/PageSlide";
import Header from "../components/atomic/Header";
import Button from "../components/atomic/Button";
import SplitViewHorizontal from '../components/atomic/SplitViewHorizontal.vue';
import LpWelcome from './landingPage/LpWelcome.vue'
import LpVision from './landingPage/LpVision.vue'
import LpContact from './landingPage/LpContact.vue'
import LpPricing from './landingPage/LpPricing.vue'
import LpFooter from './landingPage/LpFooter.vue'
import initSlide from '../pageScroll.js'
import initParallax from '../parallax'

const LandingPage = {
  name: "LandingPage",
  components: {
    PageSlide,
    Header,
    Button,
    SplitViewHorizontal,
    LpWelcome,
    LpVision,
    LpContact,
    LpFooter,
    LpPricing
  },
  mounted() {
    this.$route.query.slide !== undefined ? initSlide() : console.log('slide disabled')
    this.$route.query.parallax !== undefined ? initParallax() : console.log('parallax disabled')
  }
};

export default LandingPage;
</script>

<style lang="scss" scoped>

  .image-right {
    height: 100vh;
  }

  .landing-page {
    width: 100%;
    margin: 0;
    padding: 0;
  }

</style>
