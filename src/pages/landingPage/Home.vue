<template>
  <div class="home">
    <PageSlide>
      <template v-slot>
        <SplitViewHorizontal>
          <template v-slot:left>
            <Welcome></Welcome>
          </template>
          <template v-slot:right>
            <img
              class="image-right"
              src="../../../data/img/landingpage/slide2.svg"
            />
          </template>
        </SplitViewHorizontal>
      </template>
    </PageSlide>

    <PageSlide>
      <Introduction></Introduction>
    </PageSlide>

    <Process></Process>

    <PageSlide>
      <Contact></Contact>
    </PageSlide>
  </div>
</template>

<script>
import Welcome from './home/Welcome.vue'
import Introduction from './home/Introduction.vue'
import Contact from './home/Contact.vue'
import Process from './home/Process'

export default {
  name: 'Home',
  components: {
    Welcome,
    Introduction,
    Contact,
    Process,
  },
}
</script>

<style lang="scss" scoped>
@import '../../components/sharedStyles/colors.scss';

.image-right {
  height: 100vh;
}

.home {
  width: 100%;
  margin: 0;
  padding: 0;
}

.brand {
  position: absolute;
  margin: 1rem;
}
</style>
