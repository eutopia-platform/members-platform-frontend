<template>
  <DashboardCard
    title="Cohort testing - measure the impact of your experiments"
    class="test-status"
  >
    <div class="table">
      <Header s4>Toolkit</Header>
      <Header s4>Metric</Header>
      <Header s4>Status</Header>
      <Header s4>Test results</Header>
      <Header s4>Show in charts</Header>
      <Header s4>Lead</Header>
      <TestStatusSlip
        toolkit="Problem Definition"
        metric="Approve problem by 7/10 core users"
        status="Assumption"
        :rogress="0.2"
      ></TestStatusSlip>
      <TestStatusSlip
        toolkit="User Flow Design"
        metric="Decrease churn rate from 70,000 by 5%"
        status="In testing"
        :progress="0.5"
      ></TestStatusSlip>
      <TestStatusSlip
        toolkit="Business Model Design"
        metric="Increase subscription rate from 40,000 by 20%"
        status="Iteration"
        :progress="1"
      ></TestStatusSlip>
      <TestStatusSlip
        toolkit="A/B Test"
        metric="Improve signup rate on landingpage from 400,000 by 6%"
        status="Approved"
        :progress="0.9"
      ></TestStatusSlip>
    </div>
  </DashboardCard>
</template>

<script>
import DashboardCard from '../dashboard/DashboardCard'
import TestStatusSlip from './TestStatusSlip'

export default {
  name: 'TestStatus',
  components: {
    DashboardCard,
    TestStatusSlip,
  },
}
</script>

<style lang="scss" scoped>
.table {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 0.5fr;
  grid-template-rows: 3rem;
}
</style>
