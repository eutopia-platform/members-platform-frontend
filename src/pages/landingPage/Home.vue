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

    <Newsletter></Newsletter>
  </div>
</template>

<script>
import Welcome from './home/Welcome.vue'
import Introduction from './home/Introduction.vue'
import Process from './home/Process'
import Newsletter from './Newsletter'

export default {
  name: 'Home',
  components: {
    Welcome,
    Introduction,
    Process,
    Newsletter,
  },
}
</script>

<style lang="scss" scoped>
@import '/styles/colors.scss';

.image-right {
  height: 100vh;
}

.home {
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #fff;
}

.newsletter {
  background: linear-gradient(#6bc1ff, #5969f6);
}
</style>
