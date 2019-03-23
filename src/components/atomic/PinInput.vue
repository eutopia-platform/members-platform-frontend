<template>
  <form class="pin-input">
    <div v-for="(_, i) in groups" class="pin-group">
      <input v-for="(_, e) in digits" v-for type="text" :name="i*digits+e"
        maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'')"
        @keyup="onKey" :autofocus="i * digits + e === 0" autocomplete="off"/>
    </div>
  </form>
</template>

<script>
import Paragraph from './Paragraph.vue'

export default {
  name: "PinInput",
  props: {
    digits: {
      type: Number,
      default: 3
    },
    groups: {
      type: Number,
      default: 2
    }
  },
  components: {
    Paragraph
  },
  methods: {
    onKey: function(e) {
      if (isNaN(e.key) || e.key === ' ') return
      const current = document.activeElement.name
      if (current >= this.groups * this.digits - 1)
        this.$emit('submit')
      else
        this.$el.querySelector(`input[name='${(parseInt(current, 10)+1)}']`).focus()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../sharedStyles/shapes.scss";

.pin-input {
  .pin-group {
    display: inline-block;

    &:not(:last-child):after {
      font-size: 20px;
      margin: .25rem;
      content: "-";
    }
  }

  input {
    border: 1px solid black;
    font-size: 1rem;
    width: 2.8rem;
    height: 2.8rem;
    text-align: center;

    &:not(:first-child) {
      border-left: none;
    }

    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }

    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
