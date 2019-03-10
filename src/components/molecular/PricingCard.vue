<template>
  <div class="pricing-card">
    <div class="pc-shape">
      <Header type="quaternary" class="title">
        Product Pad for Entrepreneurs
      </Header>
      <p class="pc-price">
        Free
      </p>
      <!-- <div class="pc-image"></div> -->
      <slot class="pc-image">
      </slot>
      <ul>
        <li v-for="feat in feats">
          {{feat}}
        </li>
      </ul>
      <Button class="bt-pc-request">Request Access</Button>
    </div>
  </div>
</template>

<script>
import Header from '../atomic/Header.vue'
import Button from '../atomic/Button.vue'

const PricingCard = {
  name: "PricingCard",
  props: {
    feats: Array
  },
  components: {
    Header,
    Button
  }
}
export default PricingCard
</script>

<style lang="scss" scoped>
@import "../../components/sharedStyles/shapes.scss";
@import "../../components/sharedStyles/colors.scss";

.pricing-card {

  width: 17em;
  height: 30em;
  text-align: center;
  box-sizing: border-box;
  border-bottom-right-radius: 1.5em;

  filter: drop-shadow(5px 0px 20px rgba(gray, 0.5));
  transition: all .2s ease-out;

  &:hover {
    transition: all .2s ease-out;
    filter: drop-shadow(5px 0px 10px rgba(gray, 0.5));
  }

  .pc-shape {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    $bt-pc-shape: polygon(0 0, 0 calc(100% - 3em), 3em 100%, 100% 100%, 100% 0);
    shape-outside: $bt-pc-shape;
    clip-path: $bt-pc-shape;
    border-bottom-right-radius: 1.5em;
    display: block;
    background-color: white;
    padding: 1em;
  }

  .title {
    color: $c-primary-notsointense;
  }

  .pc-price {
    margin: .4em;
    font-size: .9em;
  }

  img {
    width: 80%;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-top: 1.5em;

    li {
      margin: 1em;
      color: gray;
    }
  }
}
</style>
