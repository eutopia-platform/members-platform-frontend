<template>
  <div>
    <Loader></Loader>
  </div>
</template>

<script>
export default {
  name: 'WorkspaceLoading',
}
</script>

<style lang="scss" scoped>
.loader {
  position: absolute;
  left: calc(50% - 1rem);
  top: calc(50% - 1rem);
}
</style>
