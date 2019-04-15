<template>
  <Card></Card>
</template>

<script>
import Molecular from '/components/sharedScripts/molecular'

export default new Molecular({
  name: 'ToolkitCard',
  atomic: [
    require('/components/atomic/Card')
  ]
})
</script>

<style lang='scss' scoped>

</style>
