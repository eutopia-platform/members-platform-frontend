<template>
  <div class="pricing-card">
    <div class="pc-shape">
      <Header type="quaternary" class="title">
        {{title}}
      </Header>
      <p class="pc-price">
        {{price}}
      </p>
      <slot class="pc-image">
      </slot>
      <ul>
        <li v-for="feat in feats">
          {{feat}}
        </li>
      </ul>
      <Button class="bt-pc-request" @click="handleRequest">Request Access</Button>
    </div>
  </div>
</template>

<script>
import Header from '../atomic/Header.vue'
import Button from '../atomic/Button.vue'

export default {
  name: "PricingCard",
  props: {
    title: String,
    price: String,
    feats: Array
  },
  components: {
    Header,
    Button
  },
  methods: {
    handleRequest() {
      this.$emit('request')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../components/sharedStyles/shapes.scss";
@import "../../components/sharedStyles/colors.scss";
@import "../../components/sharedStyles/shadows.scss";

.pricing-card {

  width: 18em;
  height: 33em;
  margin: 1em;
  text-align: center;
  box-sizing: border-box;
  border-bottom-right-radius: 1.5em;

  filter: drop-shadow($shadow-default);
  transition: all .2s ease-out;

  &:hover {
    transition: all .2s ease-out;
    filter: drop-shadow($shadow-hover);
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
    padding: .5em;
  }

  .title {
    margin-top: 1.5em;
    color: $c-primary-light;
  }

  .pc-price {
    margin: .4em;
    font-size: .9em;
  }

  img {
    height: 8em;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-top: 1.5em;

    li {
      margin-top: 1.1em;
      color: gray;
      font-size: 1em;
    }
  }

  button {
    position: absolute;
    left: 0;
    bottom: 0;
  }
}
</style>
