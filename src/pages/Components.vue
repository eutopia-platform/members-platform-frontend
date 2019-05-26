<template>
  <div :class="getClass"></div>
</template>

<script>
import Component from '/components/sharedScripts/component'

export default new Component({
  name: 'Components',
})
</script>

<style lang="scss" scoped>
.components {
  padding: 2rem;
}
</style>
