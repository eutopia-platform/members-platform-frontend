<template>
  <RouterView class="app" role="alert" @error="handleError"></RouterView>
</template>

<script>
import Vue from 'vue'
import Alert from '/components/atomic/Alert'
import CubeError from '/error'
import Baseline from './baseline'

export default {
  name: 'App',
  errorCaptured(err) {
    this.handleError(err)
    return false
  },
  data() {
    return {
      baseline: new Baseline(),
    }
  },
  created() {
    this.updateBaseline()
    window.addEventListener('resize', this.updateBaseline)
  },
  mounted() {
    if ('baseline' in this.$route.query) this.baseline.show()
  },
  methods: {
    handleError(err) {
      if (
        err.message.startsWith('Network error') ||
        (err.graphQLErrors &&
          err.graphQLErrors.some(err =>
            err.message.startsWith('Network error')
          ))
      ) {
        this.showAlert(
          'there seems to be a problem with the internet connection...'
        )
        return
      }
      if (err instanceof CubeError) {
        this.showAlert(err.message)
        return
      }
      throw err
    },
    showAlert(msg) {
      document.body.appendChild(
        new (Vue.extend(Alert))({
          propsData: { ...(msg && msg.length && { msg }) },
        }).$mount().$el
      )
    },
    updateBaseline() {
      document.documentElement.style.setProperty(
        '--baseline',
        Math.floor(
          parseFloat(getComputedStyle(document.documentElement).fontSize) * 1.5
        ) + 'px'
      )
    },
  },
}
</script>

<style lang="scss" scoped>
@import './components/sharedStyles/colors.scss';

.app {
  @include colorScheme('neutral');
}
</style>
