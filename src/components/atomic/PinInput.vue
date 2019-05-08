<template>
  <form class="pin-input" @paste="onPaste">
    <div v-for="(_, i) in groups" :key="i" class="pin-group">
      <input
        v-for="(__, e) in digits"
        :key="i * digits + e"
        type="text"
        :name="i * digits + e"
        maxlength="1"
        oninput="this.value=this.value.replace(/[^0-9]/g,'')"
        :autofocus="i * digits + e === 0"
        autocomplete="off"
        onclick="this.select()"
        onfocus="setTimeout(() => this.select(), 0)"
        :aria-label="
          'Enter digit ' + (i * digits + e + 1) + ' of the code here'
        "
        @keypress="onKey"
        @keyup="onKeyUp"
        @keypress.delete="onDelete"
        @keypress.left="onLeft"
        @keypress.right="onRight"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: 'PinInput',
  props: {
    digits: {
      type: Number,
      default: 3,
    },
    groups: {
      type: Number,
      default: 2,
    },
    value: {
      type: String,
      default: undefined,
    },
  },
  methods: {
    pin: function() {
      return Array.from(this.$el.getElementsByTagName('input'))
        .map(i => parseInt(i.value, 10))
        .filter(i => !isNaN(i))
        .join('')
    },
    submit: function() {
      this.$emit('submit', this.pin())
    },
    onKey: function(e) {
      if (isNaN(e.key) || e.key === ' ') return
      const current = document.activeElement.name
      if (current >= this.groups * this.digits - 1) {
        this.$el.querySelector(`input[name='${parseInt(current, 10)}']`).value =
          e.key
      } else {
        // write input to current field and focus next
        this.$el.querySelector(`input[name='${parseInt(current, 10)}']`).value =
          e.key
        e.preventDefault()
        this.$el
          .querySelector(`input[name='${parseInt(current, 10) + 1}']`)
          .focus()
      }
      this.$emit('input', this.pin())
    },
    onKeyUp: function(e) {
      if (isNaN(e.key) || e.key === ' ') return
      const current = document.activeElement.name
      if (
        current >= this.groups * this.digits - 1 &&
        this.pin().length == this.groups * this.digits
      ) {
        this.submit()
      }
    },
    onDelete: function() {
      const current = document.activeElement.name
      this.$el.querySelector(`input[name='${parseInt(current, 10)}']`).value =
        ''
      if (current !== '0')
        this.$el
          .querySelector(`input[name='${parseInt(current, 10) - 1}']`)
          .focus()
      this.$emit('input', this.pin())
    },
    onLeft: function(e) {
      e.preventDefault()
      const current = parseInt(document.activeElement.name, 10)
      if (current > 0)
        this.$el.querySelector(`input[name='${current - 1}']`).focus()
    },
    onRight: function(e) {
      e.preventDefault()
      const current = parseInt(document.activeElement.name, 10)
      if (current < this.groups * this.digits - 1)
        this.$el.querySelector(`input[name='${current + 1}']`).focus()
    },
    onPaste: function(e) {
      e.preventDefault()
      const paste = (event.clipboardData || window.clipboardData)
        .getData('text')
        .trim()
      if (paste.length !== 6 || !/^\d+$/.test(paste)) return
      Array.from(this.$el.getElementsByTagName('input')).forEach(
        i => (i.value = paste[parseInt(i.name, 10)])
      )
      this.$el
        .querySelector(`input[name='${this.groups * this.digits - 1}']`)
        .focus()
      this.$emit('input', this.pin())
      this.submit()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../sharedStyles/shapes.scss';

.pin-input {
  .pin-group {
    display: inline-block;

    &:not(:last-child):after {
      font-size: 20px;
      margin: 0.25rem;
      content: '-';
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
