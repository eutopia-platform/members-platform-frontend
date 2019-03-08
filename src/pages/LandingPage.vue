<template>
  <div class="landing-page">
    <!-- <h1>Hello Landing Page!</h1>
    <p>Welcome to our super awesome project!</p>
    <router-link to="/project-hub">
      <Button>Go to project hub</Button>
    </router-link> -->

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
      <!-- <Header type="primary">
        Let's talk about your project
      </Header> -->
      <LpContact>

      </LpContact>
    </PageSlide>

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

const LandingPage = {
  name: "LandingPage",
  components: {
    PageSlide,
    Header,
    Button,
    SplitViewHorizontal,
    LpWelcome,
    LpVision,
    LpContact
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
