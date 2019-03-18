<template>
  <!-- <div class="input"> -->
    <input
      v-model="value"
      class="input"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      @input="onChange"
    >
  <!-- </div> -->
</template>

<script>
const Input = {
  name: "Input",
  props: {
    name: {
      default: "",
      type: String
    },
    placeholder: {
      default: "",
      type: String
    },
    type: {
      default: "text",
      type: String
    }
  },
  data: () => ({
    value: ""
  }),
  methods: {
    onChange() {
      const payload = {
        name: this.name,
        value: this.value
      };
      this.$emit("valueChange", payload);
    }
  }
};

export default Input;
</script>

<style lang="scss" scoped>
@import "../sharedStyles/colors.scss";
@import "../sharedStyles/shapes.scss";

.input {
  display: block;
  width: 100%;
  background-color: $c-primary-foreground;
  color: $c-primary;
  border: $border;
  border-radius: $border-radius;
  box-shadow: $shadow;
  padding: 0.75rem;
  cursor: text;
  outline: none;
  transition: box-shadow 0.2s, transform 0.2s;
  transform: translate(0, 0px);

  &:active {
    box-shadow: $shadow-active;
    transform: translate(0, 0px);
    transition-duration: 0.1s;
  }

  &:disabled {
    cursor: not-allowed;
  }
}
</style>
