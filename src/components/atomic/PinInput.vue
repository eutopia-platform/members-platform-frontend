<template>
  <form class="pin-input">
    <div v-for="(_, i) in groups" class="pin-group">
      <input
        v-for="(_, e) in digits"
        v-for type="text"
        :name="i*digits+e"
        maxlength="1"
        oninput="this.value=this.value.replace(/[^0-9]/g,'')"
        @keydown="onKey"
        @keydown.delete="onDelete"
        @keydown.left="onLeft"
        @keydown.right="onRight"
        :autofocus="i * digits + e === 0"
        autocomplete="off"
        onclick="this.select()"
        onfocus="setTimeout(() => this.select(), 0)"
      />
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
      if (current >= this.groups * this.digits - 1) {
        const pin = Array.from(this.$el.getElementsByTagName('input'))
          .map(i => parseInt(i.value, 10)).filter(i => !isNaN(i)).join('')
        this.$emit('submit', pin)
      }
      else {
        // write input to current field and focus next
        this.$el.querySelector(`input[name='${(parseInt(current, 10))}']`).value = e.key
        e.preventDefault()
        this.$el.querySelector(`input[name='${(parseInt(current, 10)+1)}']`).focus()
      }
    },
    onDelete: function(e) {
      const current = document.activeElement.name
      this.$el.querySelector(`input[name='${(parseInt(current, 10))}']`).value = ''
      if (current !== '0')
        this.$el.querySelector(`input[name='${(parseInt(current, 10)-1)}']`).focus()
    },
    onLeft: function(e) {
      e.preventDefault()
      const current = parseInt(document.activeElement.name, 10)
      if (current > 0)
        this.$el.querySelector(`input[name='${(current - 1)}']`).focus()
    },
    onRight: function(e) {
      e.preventDefault()
      const current = parseInt(document.activeElement.name, 10)
      if (current < this.groups * this.digits - 1)
        this.$el.querySelector(`input[name='${(current + 1)}']`).focus()
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
