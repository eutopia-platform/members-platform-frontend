<template>
  <div class="input-wrap">
    <input v-model="value" class="input" :name="name" :type="type"
      :placeholder="placeholder" @input="onChange" @keyup.enter="onEnter"
      v-bind:class="styleClass" :autocomplete="type === 'password' ? 'new-password': 'true'">
  </div>
</template>

<script>
import Button from './Button.vue'

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
  components: {
    Button
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

.input-wrap {
  max-width: 40vw;
}

.input {
  display: inline-block;
  width: 100%;
  // background-color: $c-primary-foreground;
  // background-color: map-get($colors, neutral-back);
  // color: $c-text-primary;
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
}

.style-blend {
  border: none;
  box-shadow: none;
  border-radius: 0;
  border-bottom: 1px solid #8ca8a8;
  padding: .5rem;
  padding-left: .5rem;
  font-size: $fs-base;

  &:active {
    box-shadow: none;
  }
}
</style>
