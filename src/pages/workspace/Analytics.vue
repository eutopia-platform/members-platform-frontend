<template>
  <div class="analytics">
    <Header tertiary>Analytics</Header>
    <div class="content">
      <InfoCard>
        <div>
          <Paragraph>
            The lean analytics dashboard helps you to measure the impact of
            experiments on KPIs in realtime. Choose the metrics to be improved
            and observe how your actions impact your business.
          </Paragraph>
        </div>
      </InfoCard>
    </div>
  </div>
</template>

<script>
import Header from '/components/atomic/Header'
import Paragraph from '/components/atomic/Paragraph'
import InfoCard from '/components/molecular/InfoCard'

export default {
  name: 'Analytics',
  components: {
    Header,
    Paragraph,
    InfoCard,
  },
}
</script>

<style lang="scss" scoped>
.analytics {
  .content {
    margin-top: 1rem;
    flex-grow: 1;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;

    * {
      height: 100%;
      @media screen and (max-width: 1200px) {
        grid-column-start: span 2;
      }
    }

    .welcome {
      grid-column-start: span 2;
    }
  }
}
</style>
