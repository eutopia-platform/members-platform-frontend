<template>
  <DashboardCard title="Process Overview">
    <div class="content">
      <ProcessCard></ProcessCard>
      <div class="placeholder">
        <div>
          <Paragraph>You have not started a process yet.</Paragraph>
          <Paragraph>
            We recomment this process to start working on an idea.
          </Paragraph>
        </div>
      </div>
    </div>
  </DashboardCard>
</template>

<script>
import DashboardCard from './DashboardCard'
import ProcessCard from './ProcessCard'

export default {
  name: 'Process',
  components: {
    DashboardCard,
    ProcessCard,
  },
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: row;

  .placeholder {
    flex-grow: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>
