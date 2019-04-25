<template>
  <div class="landing-page">
    <Logo></Logo>

    <PageSlide>
      <template v-slot>
        <SplitViewHorizontal>
          <template v-slot:left>
            <Welcome></Welcome>
          </template>
          <template v-slot:right>
            <img
              class="image-right"
              src="../../data/img/landingpage/slide2.svg"
            />
          </template>
        </SplitViewHorizontal>
      </template>
    </PageSlide>

    <PageSlide>
      <SplitViewHorizontal>
        <template v-slot:left>
          <Introduction></Introduction>
        </template>
        <template v-slot:right>
          <img
            class="image-right"
            src="../../data/img/landingpage/laptop.svg"
            style="transform: translate(-40%, -50%)"
          />
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
import PageSlide from '../components/atomic/PageSlide'
import Logo from '../components/atomic/Logo'
import SplitViewHorizontal from '../components/atomic/SplitViewHorizontal.vue'
import Welcome from './landingPage/Welcome.vue'
import Introduction from './landingPage/Introduction.vue'
import Contact from './landingPage/Contact.vue'
import Footer from './landingPage/Footer.vue'

export default {
  name: 'LandingPage',
  components: {
    Logo,
    PageSlide,
    SplitViewHorizontal,
    Welcome,
    Introduction,
    Contact,
    Footer,
  },
}
</script>

<style lang="scss" scoped>
@import '../components/sharedStyles/colors.scss';

.image-right {
  height: 100vh;
}

.landing-page {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
