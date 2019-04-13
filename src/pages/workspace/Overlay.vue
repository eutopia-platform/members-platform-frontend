<template>
  <div class="overlay">
    <div class="container">
      <SplitViewHorizontal class="splitViewHorizontal">
        <template v-slot:left>
          <Header primary>Oops! You arrived early to the party.</Header>
          <Tagline type="sub">
            We are busy at work, check back with us a few days
            later to start your lean product development
          </Tagline>
        </template>
        <template v-slot:right>
          <img src="~/../data/img/working_on_it.svg" alt="We're working on it.">
        </template>
      </SplitViewHorizontal>
    </div>
  </div>
</template>

<script>
import SplitViewHorizontal from "~/components/atomic/SplitViewHorizontal";
import Header from "~/components/atomic/Header";
import Tagline from "~/components/atomic/Tagline";

export default {
  name: "Overlay",
  components: {
    SplitViewHorizontal,
    Header,
    Tagline
  }
};
</script>

<style lang="scss" scoped>
@import "~/components/sharedStyles/shadows";

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: grey;
  background-color: rgba(100, 100, 100, 0.3);

  text-align: center;

  .container {
    display: inline-block;

    position: relative;
    top: 5rem;
    max-width: 50rem;
    max-height: 80%;
    padding: 2rem 0 0 4rem;

    background-color: white;
    box-shadow: $shadow-default;

    text-align: initial;

    .splitViewHorizontal {
      position: relative;
      max-height: 50vh;
    }
  }
}
</style>
