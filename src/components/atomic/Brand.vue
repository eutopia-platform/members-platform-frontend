<template>
  <div class='brand'>
    <Header tertiary>
      Productcube
    </Header>
  </div>
</template>

<script>
import Header from '/components/atomic/Header'

export default {
  name: 'Brand',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
@import "/components/sharedStyles/colors";

* {
  color: $c-accent;
}
</style>
