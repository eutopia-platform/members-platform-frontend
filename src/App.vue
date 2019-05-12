<template>
  <RouterView class="app" @error="handleError"></RouterView>
</template>

<script>
import Vue from 'vue'
import Alert from '/components/atomic/Alert'

export default {
  name: 'App',
  errorCaptured(err) {
    this.handleError(err)
    return false
  },
  methods: {
    handleError(err) {
      if (
        err.message.startsWith('Network error') ||
        err.graphQLErrors.some(err => err.message.startsWith('Network error'))
      ) {
        this.showAlert(
          'there seems to be a problem with the internet connection...'
        )
        return
      }
      throw err
    },
    showAlert(msg) {
      document.body.appendChild(
        new (Vue.extend(Alert))({ propsData: { msg } }).$mount().$el
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
