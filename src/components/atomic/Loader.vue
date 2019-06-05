<template>
  <div :class="getClass" aria-label="loading"></div>
</template>

<script>
import Atomic from '/components/sharedScripts/atomic'

export default new Atomic({
  name: 'Loader',
})
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/colors';

.loader {
  width: 2rem;
  height: 2rem;
  border: 0.3rem solid lightgray;
  border-radius: 50%;
  border-top: 0.3rem solid color('on-surface');
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
