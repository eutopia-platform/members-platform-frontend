<template>
  <DashboardCard title="Toolkit Status" :class="getClass">
    <Table divide-horizontal :columns="['name', 'status', 'progress', 'lead']">
      <template v-for="(row, iRow) in toolkits">
        <Paragraph v-for="(e, i) in row" :key="`entry-${iRow}-${i}`">
          {{ e }}
        </Paragraph>
      </template>
    </Table>
  </DashboardCard>
</template>

<script>
import Component from '/components/sharedScripts/component'
import DashboardCard from './DashboardCard'
import Table from '/components/molecular/DataTable'

export default new Component({
  name: 'ToolkitStatusCard',
  components: {
    DashboardCard,
    Table,
  },
  data: {
    toolkits: [
      {
        name: 'Foo',
        status: 'Bar',
        progress: 0.5,
        lead: 'person',
      },
    ],
  },
})
</script>

<style lang="scss" scoped></style>
