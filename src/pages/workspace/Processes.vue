<template>
  <div class="processes">
    <Header tertiary>Processes</Header>
    <div class="content">
      <InfoCard>
        <div>
          <Paragraph>
            Run, test and document multiple experiments. Find or build processes
            with the toolkits your startup needs to develop validated solutions
            that people want.
          </Paragraph>
        </div>
      </InfoCard>
      <ProcessCard></ProcessCard>
      <ProcessCard></ProcessCard>
    </div>
  </div>
</template>

<script>
import InfoCard from '/components/molecular/InfoCard'
import ProcessCard from './processes/ProcessCard'

export default {
  name: 'Processes',
  components: {
    InfoCard,
    ProcessCard,
  },
}
</script>

<style lang="scss" scoped>
.processes {
  display: flex;
  flex-direction: column;

  .content {
    margin-top: 1rem;
    flex-grow: 1;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;

    .process-card {
      grid-column-start: span 4;
    }
  }
}
</style>
