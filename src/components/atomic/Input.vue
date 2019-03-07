<template>
  <div>
    <input
      v-model="value"
      class="input"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      @input="onChange"
    >
  </div>
</template>

<script>
const Input = {
  name: "Input",
  props: {
    name: String,
    type: String,
    placeholder: String
  },
  data: () => ({
    value: ""
  }),
  methods: {
    onChange() {
      const data = {
        name: this.name,
        value: this.value
      };
      this.$emit("valueChange", data);
    }
  }
};

export default Input;
</script>

<style lang="scss" scoped>
@import "../sharedStyles/colors.scss";
@import "../sharedStyles/shapes.scss";

.input {
  width: 12rem;
  background-color: $c-primary-foreground;
  color: $c-primary-intense;
  border: $border;
  border-radius: $border-radius;
  box-shadow: $shadow;
  padding: 0.75rem;
  cursor: text;
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
