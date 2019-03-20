<template>
    <input
      v-model="value"
      class="input"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      @input="onChange"
    >
</template>

<script>
export default {
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
  box-shadow: $shadow-default;
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
