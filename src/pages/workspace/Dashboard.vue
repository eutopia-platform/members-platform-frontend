<template>
  <div class='dashboard'>
    <Header tertiary>
      Dashboard
    </Header>
    <div class='content'>
      <ToolkitStatus></ToolkitStatus>
      <Card>b</Card>
      <Card class='full'>c</Card>
    </div>
  </div>
</template>

<script>
import Card from '/components/atomic/Card'
import Header from '/components/atomic/Header'
import ToolkitStatus from './dashboard/ToolkitStatus'

export default {
  name: 'Dashboard',
  components: {
    Header,
    Card,
    ToolkitStatus
  }
}
</script>

<style lang='scss' scoped>
.dashboard {
  display: flex;
  flex-direction: column;

  .content {
    margin-top: 1rem;
    flex-grow: 1;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;

    * {
      height: 100%;
    }

    .full {
      grid-column-start: span 2;
    }
  }
}
</style>
