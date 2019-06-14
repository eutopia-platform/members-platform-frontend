<template>
  <div :class="getClass">
    <Header s2>Admin Dashboard</Header>
    <RouterLink to="toolkits" append>Toolkits</RouterLink>
  </div>
</template>

<script>
import Component from '/scripts/component'

export default new Component({
  name: 'Dashboard',
})
</script>

<style lang="scss" scoped></style>
