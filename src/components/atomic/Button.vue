<template>
  <button
    class="button v"
    v-bind:class="{
    'bt-request': this.type === 'request',
    'bt-pc-request': this.type === 'pc-request',
    'text': this.type === 'text',
    'icon': this.type === 'icon'
    }"
    @click="onClick"
  >
    <slot></slot>
    <img v-if="type === 'icon'" :src="img">
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: String,
    img: String
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../sharedStyles/colors.scss";
@import "../sharedStyles/shapes.scss";
@import "../sharedStyles/text.scss";

.button {
  background-color: #6bc1ff;
  color: #ffffff;
  border: none;
  border-radius: $border-radius;
  box-shadow: $shadow-default;
  padding: 0.75rem;
  cursor: pointer;
  outline: none;
  transition: box-shadow 0.2s, transform 0.2s;
  transform: translate(0, 0px);
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  box-sizing: border-box;

  &:hover {
    box-shadow: $shadow-hover;
    // transform: translate(0, -1px);
  }

  &:active {
    box-shadow: $shadow-active;
    transform: translate(0, 0px);
    transition-duration: 0.1s;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: lightgrey; // TODO use official color here
    box-shadow: none;

    &:hover {
      transform: none;
    }
  }
}

.bt-request {
  height: 3em;
  border-radius: 1.5em;
  padding-left: 3em;
  padding-right: 3em;
  background: linear-gradient(to right, #8521ba, #5aaafa);
}

.bt-pc-request {
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

.text {
  background: none;
  padding: 0;
  border: none;
  box-shadow: none;
  color: black;
  font-size: $fs-small;

  &:hover {
    box-shadow: none;
    transform: none;
  }
}

.icon {
  padding: 0;
  background: none;
  box-shadow: none;
  &:hover {
    box-shadow: none;
  }
}
</style>
