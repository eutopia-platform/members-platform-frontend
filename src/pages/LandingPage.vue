<template>
  <div class="landing-page">
    <PageSlide>
      <template v-slot>
        <SplitViewHorizontal>
          <template v-slot:left>
            <Welcome></Welcome>
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
          <Vision></Vision>
        </template>
        <template v-slot:right>
          <img class="image-right" src="../../data/img/landingpage/slide2.svg">
        </template>
      </SplitViewHorizontal>
    </PageSlide>

    <PageSlide>
      <SplitViewHorizontal>
        <template v-slot:left>
          <Pricing></Pricing>
        </template>
        <template v-slot:right>
          <img class="image-right" src="../../data/img/landingpage/slide3.svg">
        </template>
      </SplitViewHorizontal>
    </PageSlide>

    <PageSlide>
      <Contact></Contact>
    </PageSlide>

    <Footer></Footer>
  </div>
</template>

<script>
import PageSlide from "../components/atomic/PageSlide";
import Header from "../components/atomic/Header";
import Button from "../components/atomic/Button";
import SplitViewHorizontal from '../components/atomic/SplitViewHorizontal.vue';
import Welcome from './landingPage/Welcome.vue'
import Vision from './landingPage/Vision.vue'
import Contact from './landingPage/Contact.vue'
import Pricing from './landingPage/Pricing.vue'
import Footer from './landingPage/Footer.vue'

export default {
  name: "LandingPage",
  components: {
    PageSlide,
    Header,
    Button,
    SplitViewHorizontal,
    Welcome,
    Vision,
    Contact,
    Footer,
    Pricing
  },
};
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
