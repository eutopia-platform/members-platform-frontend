<template>
  <RouterView class="app" role="alert"></RouterView>
</template>

<script>
import Vue from 'vue'
import Baseline from '~/scripts/baseline'
import { mapActions } from 'vuex'

export default {
  name: 'App',
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
    this.loadUser()
    if ('baseline' in this.$route.query) this.baseline.show()
  },
  methods: {
    ...mapActions('user', ['loadUser']),
    showPopup: function({ component, callback, props }) {
      document.body.appendChild(
        new (Vue.extend(component))({
          propsData: { callback, ...props },
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
@import '/styles/colors.scss';

.app {
  @include colorScheme('surface');
}
</style>
