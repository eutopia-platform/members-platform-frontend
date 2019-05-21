<template>
  <DashboardCard title="Ready for Validation" button="get feedback" disabled>
    <div></div>
    <Paragraph v-if="toolkits.length === 0" class="nokit">
      No toolkit ready for validation.
    </Paragraph>
  </DashboardCard>
</template>

<script>
import DashboardCard from './DashboardCard'

export default {
  name: 'Validation',
  components: {
    DashboardCard,
  },
  data() {
    return {
      toolkits: [],
    }
  },
}
</script>

<style lang="scss" scoped>
.nokit {
  text-align: center;
}
</style>
