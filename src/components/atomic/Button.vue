<template>
  <button @click="onClick" class="button">
    <slot></slot>
  </button>
</template>

<script>
const Button = {
  name: "Button",
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
  background-color: $c-primary;
  color: $c-primary-foreground;
  border: none;
  border-radius: $border-radius;
  box-shadow: $shadow;
  padding: 0.75rem;
  cursor: pointer;
  outline: none;
  transition: box-shadow 0.2s, transform 0.2s;
  transform: translate(0, 0px);

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
</style>
