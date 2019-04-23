<template>
  <div class="pricing-card">
    <div class="pc-shape">
      <Header quaternary class="title">{{ title }}</Header>
      <p class="pc-price">{{ price }}</p>
      <Small>when billed annually</Small>
      <slot class="pc-image"></slot>
      <ul>
        <li v-for="feat in feats" :key="feats.indexOf(feat)">{{ feat }}</li>
      </ul>
      <Button class="bt-pc-request" @click="handleRequest"
        >Request Access</Button
      >
    </div>
  </div>
</template>

<script>
import Header from '../atomic/Header.vue'
import Small from '../atomic/Small.vue'
import Button from '../atomic/Button.vue'

export default {
  name: 'PricingCard',
  components: {
    Header,
    Small,
    Button,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    price: {
      type: String,
      default: '',
    },
    feats: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleRequest() {
      this.$emit('request')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../components/sharedStyles/shapes.scss';
@import '../../components/sharedStyles/colors.scss';
@import '../../components/sharedStyles/shadows.scss';

.pricing-card {
  width: 18em;
  height: 32em;
  margin: 1em;
  text-align: center;
  box-sizing: border-box;
  border-bottom-right-radius: 1.5em;

  filter: drop-shadow($shadow-default);
  transition: all 0.2s ease-out;

  &:hover {
    transition: all 0.2s ease-out;
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
    padding: 0.5em;
  }

  .title {
    margin-top: 1.5em;
  }

  .pc-price {
    margin: 0.4em;
    font-size: 0.9em;
  }

  .small {
    margin: 0.4em;
    margin-bottom: 1rem;
    display: block;
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

    height: 3em;
    width: 100%;
    border-radius: 0;
    padding-left: 3em;
    padding-right: 3em;
    background: linear-gradient(to right, #8521ba, #5aaafa);
    box-shadow: none;

    $bt-pc-shape: polygon(0 0, 100px 100px, 100% 100px, 100% 0);
    shape-outside: $bt-pc-shape;
    clip-path: $bt-pc-shape;
    border-bottom-right-radius: 1.5em;

    &:hover {
      box-shadow: none;
      transform: none;
    }

    &:active {
      box-shadow: none;
    }
  }
}
</style>
