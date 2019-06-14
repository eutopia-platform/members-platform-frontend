<template>
  <DashboardCard
    title="Toolkit Status"
    button="add a toolkit"
    :class="getClass"
    @click="$router.push($route.path + '/toolkits')"
  >
    <Table divide-horizontal :columns="['name', 'status', 'progress', 'lead']">
      <template v-for="(row, iRow) in toolkits">
        <Component
          :is="typeof e === 'string' ? 'Paragraph' : 'ProgressBar'"
          v-for="(e, i) in row"
          :key="`entry-${iRow}-${i}`"
          :progress="typeof e === 'number' && e"
        >
          {{ e }}
        </Component>
      </template>
    </Table>
  </DashboardCard>
</template>

<script>
import Component from '~/scripts/component'
import DashboardCard from './DashboardCard'
import Table from '~/components/molecular/DataTable'

export default new Component({
  name: 'ToolkitStatusCard',
  components: {
    DashboardCard,
    Table,
  },
  data: () => ({
    toolkits: [
      {
        name: 'Foo',
        status: 'Bar',
        progress: 0.5,
        lead: 'person',
      },
    ],
  }),
})
</script>

<style lang="scss" scoped></style>
