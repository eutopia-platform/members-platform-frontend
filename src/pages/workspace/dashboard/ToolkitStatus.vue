<template>
  <DashboardCard title="Toolkit Status Overview">
    <div class="table">
      <Header quaternary>Name</Header>
      <Header quaternary>Status</Header>
      <Header quaternary>Progress</Header>
      <Header quaternary>Lead</Header>
      <ToolkitStatusSlip
        name="Problem Definition"
        status="Assumption"
        :progress="0.1"
      ></ToolkitStatusSlip>
      <ToolkitStatusSlip
        name="Customer Definition"
        status="In Testing"
        :progress="0.4"
      ></ToolkitStatusSlip>
      <ToolkitStatusSlip
        name="Business Model"
        status="Iteration"
        :progress="0.7"
      ></ToolkitStatusSlip>
      <ToolkitStatusSlip
        name="Value Hypothesis"
        status="Validated"
        :progress="1"
      ></ToolkitStatusSlip>
    </div>
  </DashboardCard>
</template>

<script>
import DashboardCard from './DashboardCard'
import ToolkitStatusSlip from './ToolkitStatusSlip'
import Header from '/components/atomic/Header'

export default {
  name: 'ToolkitStatus',
  components: {
    DashboardCard,
    ToolkitStatusSlip,
    Header,
  },
}
</script>

<style lang="scss" scoped>
.table {
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 1fr;
  grid-template-rows: 3rem;
}
</style>
