<template>
    <input
      v-model="value"
      class="input"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      @input="onChange"
      @keyup.enter="onEnter"
      v-bind:class="styleClass"
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
    },
    look: {
      default: "default",
      type: String
    },
    focus: {
      default: false,
      type: Boolean
    }
  },
  data: () => ({
    value: ""
  }),
  computed: {
    styleClass: comp => 'style-' + comp.look
  },
  methods: {
    onChange() {
      const payload = {
        name: this.name,
        value: this.value
      };
      this.$emit("valueChange", payload);
    },
    onEnter() {
      this.$emit("submit")
    }
  },
  mounted: function() {
    if (this.focus)
      this.$el.focus()
  }
};
</script>

<style lang="scss" scoped>
@import "../sharedStyles/colors.scss";
@import "../sharedStyles/shapes.scss";
@import "../sharedStyles/text.scss";

.input {
  display: block;
  width: 100%;
  max-width: 30vw;
  background-color: $c-primary-foreground;
  color: $c-text-primary;
  border: $border;
  border-radius: $border-radius;
  box-shadow: $shadow-default;
  padding: 0.75rem;
  cursor: text;
  outline: none;
  transition: box-shadow 0.2s, transform 0.2s;
  transform: translate(0, 0px);
  box-sizing: border-box;

  &:active {
    box-shadow: $shadow-active;
    transform: translate(0, 0px);
    transition-duration: 0.1s;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    color: $c-text-primary-light;
  }
}

.style-blend {
  border: none;
  box-shadow: none;
  border-radius: 0;
  border-bottom: 1px solid $c-text-primary-light;
  padding: .5rem;
  padding-left: .5rem;
  font-size: $fs-base;

  &:active {
    box-shadow: none;
  }
}
</style>
