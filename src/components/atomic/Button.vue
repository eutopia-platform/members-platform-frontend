<template>
  <button class="button v" v-bind:class="{ 'bt-request': this.type === 'request' }"
@click="onClick">
    <slot />
  </button>
</template>

<script>
const Button = {
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

export default Button;
</script>

<style lang="scss" scoped>
@import "../sharedStyles/colors.scss";
@import "../sharedStyles/shapes.scss";

.button {
  background-color: $c-primary-notsointense;
  color: $c-primary-foreground;
  border: none;
  border-radius: $border-radius;
  box-shadow: $shadow;
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
}

.bt-request {
  height: 3em;
  border-radius: 1.5em;
  padding-left: 3em;
  padding-right: 3em;
  background: linear-gradient(to right, #8521BA, #5AAAFA);
}
</style>
