<template>
  <Card class="process-card"></Card>
</template>

<script>
import Card from '/components/atomic/Card'

export default {
  name: 'ProcessCard',
  components: {
    Card,
  },
}
</script>

<style lang="scss" scoped>
.process-card {
  height: 15rem !important;
}
</style>
