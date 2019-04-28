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
    </div>
  </div>
</template>

<script>
import Header from '/components/atomic/Header'
import InfoCard from '/components/molecular/InfoCard'

export default {
  name: 'Processes',
  components: {
    Header,
    InfoCard,
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

    .welcome {
      grid-column-start: span 4;
    }
  }
}
</style>
