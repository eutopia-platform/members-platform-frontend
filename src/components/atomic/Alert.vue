<template>
  <div :class="getClass" @click="close">{{ msg }}</div>
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
  },
  methods: {
    close() {
      this.$el.remove()
    },
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
  color: white;
  box-shadow: shadow(2);
  z-index: 1000;
}
</style>
