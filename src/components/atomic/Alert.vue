<template>
  <div :class="getClass" class="out-of-screen" @click="close">{{ msg }}</div>
</template>

<script>
import Atomic from '~/scripts/atomic'

export default new Atomic({
  name: 'Alert',
  props: {
    msg: {
      type: String,
      default: 'something went wrong...',
    },
    timeout: {
      type: Number,
      default: 3000,
    },
  },
  methods: {
    close() {
      this.$el.classList.add('out-of-screen')
      setTimeout(() => this.$el.remove(), 500)
    },
  },
  mounted() {
    setTimeout(() => this.$el.classList.remove('out-of-screen'), 100)
    setTimeout(() => this.close(), this.timeout)
  },
})
</script>

<style lang="scss" scoped>
@import '/styles/shadows.scss';
@import '/styles/colors.scss';

.alert {
  position: fixed;
  width: 100vw;
  height: auto;
  min-height: 2rem;
  width: auto;
  max-width: 100%;
  min-width: 30rem;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  line-height: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  box-sizing: border-box;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  box-sizing: border-box;
  @include colorScheme('error');
  box-shadow: shadow(10);
  z-index: 1000;
  transition: transform 0.2s ease-out;
}

.out-of-screen {
  transform: translateX(-50%) translateY(10rem);
  transition: transform 0.2s ease-in;
}
</style>
