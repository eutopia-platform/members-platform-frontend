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
            <Header type="primary">
              Helping projects succeed
            </Header>
            <p>
              Project hub helps you to identify the most important aspects of your
              project so you achieve the right goals.
            </p>
            <Button>
              Request early access
            </Button>
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
          <Header type="primary">
            Vision driven project plan
          </Header>
        </template>
        <template v-slot:right>
          <img class="image-right" src="../../data/img/landingpage/slide2.svg">
        </template>
      </SplitViewHorizontal>
    </PageSlide>

    <PageSlide style="background-color: rgb(89, 109, 238)">
    </PageSlide>

  </div>
</template>

<script>
import PageSlide from "../components/atomic/PageSlide";
import Header from "../components/atomic/Header";
import Button from "../components/atomic/Button";
import SplitViewHorizontal from '../components/atomic/SplitViewHorizontal.vue'

const LandingPage = {
  name: "LandingPage",
  components: {
    PageSlide,
    Header,
    Button,
    SplitViewHorizontal
  }
};

export default LandingPage;
</script>

<style lang="scss" scoped>

  .image-right {
    height: 100vh;
  }

  $blue-light: rgb(126, 192, 250);
  $blue-dark: rgb(89, 109, 238);

  .landing-page {
    width: 100%;
    margin: 0;
    padding: 0;
  }

</style>
