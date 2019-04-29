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
import Header from '/components/atomic/Header'
import Paragraph from '/components/atomic/Paragraph'
import InfoCard from '/components/molecular/InfoCard'
import ProcessCard from './processes/ProcessCard'

export default {
  name: 'Processes',
  components: {
    Header,
    Paragraph,
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

    * {
      height: 100%;
      @media screen and (max-width: 1200px) {
        grid-column-start: span 2;
      }
    }

    .welcome,
    .process-card {
      grid-column-start: span 4;
    }
  }
}
</style>
