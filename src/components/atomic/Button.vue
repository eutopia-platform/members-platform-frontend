<template>
  <button class="button v" v-bind:class="{
    'bt-request': this.type === 'request',
    'bt-pc-request': this.type === 'pc-request'
    }"
    @click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: String
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

.button {
  background-color: $c-primary-light;
  color: $c-primary-foreground;
  border: none;
  border-radius: $border-radius;
  box-shadow: $shadow-default;
  padding: 0.75rem;
  cursor: pointer;
  outline: none;
  transition: box-shadow 0.2s, transform 0.2s;
  transform: translate(0, 0px);
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;

  &:hover {
    box-shadow: $shadow-hover;
    transform: translate(0, -1px);
  }

  &:active {
    box-shadow: $shadow-active;
    transform: translate(0, 0px);
    transition-duration: 0.1s;
  }

  &:disabled {
    cursor: not-allowed;
  }
}

.bt-request {
  height: 3em;
  border-radius: 1.5em;
  padding-left: 3em;
  padding-right: 3em;
  background: linear-gradient(to right, #8521BA, #5AAAFA);
}

.bt-pc-request {
  height: 3em;
  width: 100%;
  border-radius: 0;
  padding-left: 3em;
  padding-right: 3em;
  background: linear-gradient(to right, #8521BA, #5AAAFA);
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
</style>
