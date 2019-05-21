<template>
  <DashboardCard
    title="Toolkit Status Overview"
    button="add toolkit"
    @action="addToolkit"
  >
    <div class="table">
      <Header quaternary>Name</Header>
      <Header quaternary>Status</Header>
      <Header quaternary>Progress</Header>
      <Header quaternary>Lead</Header>
      <ToolkitStatusSlip
        v-for="kit in toolkits"
        :key="toolits.indexOf(kit)"
      ></ToolkitStatusSlip>
      <Paragraph v-if="toolkits.length === 0" class="nokit">
        You haven't started any toolkit yet.
      </Paragraph>
    </div>
  </DashboardCard>
</template>

<script>
import DashboardCard from './DashboardCard'
import ToolkitStatusSlip from './ToolkitStatusSlip'

export default {
  name: 'ToolkitStatus',
  components: {
    DashboardCard,
    ToolkitStatusSlip,
  },
  data() {
    return {
      toolkits: [],
    }
  },
  methods: {
    addToolkit() {
      this.$router.push(this.$route.path + '/toolkits')
    },
  },
}
</script>

<style lang="scss" scoped>
.table {
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 1fr;
  grid-template-rows: 3rem;
}

.nokit {
  grid-column-start: span 4;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
