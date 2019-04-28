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
      <TestStatus></TestStatus>
      <MetricCard 
        img="https://s3.eu-central-1.amazonaws.com/eutopia.media/metric_1.svg"
        val="10,940"
        name="Signups"
        :percent="121.52"
      ></MetricCard>
      <MetricCard 
        img="https://s3.eu-central-1.amazonaws.com/eutopia.media/metric_2.svg"
        val="4,909"
        name="Activation"
        :percent="14.50"
      ></MetricCard>
      <MetricCard 
        img="https://s3.eu-central-1.amazonaws.com/eutopia.media/metric_3.svg"
        val="596"
        name="Retention"
        :percent="25.42"
      ></MetricCard>
      <MetricCard 
        img="https://s3.eu-central-1.amazonaws.com/eutopia.media/metric_4.svg"
        val="102"
        name="Referral"
        :percent="-2.45"
      ></MetricCard>
      <MetricCard 
        img="https://s3.eu-central-1.amazonaws.com/eutopia.media/metric_5.svg"
        val="4,594€"
        name="Monthly recurring revenue"
        :percent="45.42"
      ></MetricCard>
      <MetricCard 
        img="https://s3.eu-central-1.amazonaws.com/eutopia.media/metric_6.svg"
        val="4.92€"
        name="Customer lifetime value"
        :percent="-11.59"
      ></MetricCard>
    </div>
  </div>
</template>

<script>
import Header from '/components/atomic/Header'
import Paragraph from '/components/atomic/Paragraph'
import InfoCard from '/components/molecular/InfoCard'
import TestStatus from './analytics/TestStatus'
import MetricCard from './analytics/MetricCard'

export default {
  name: 'Analytics',
  components: {
    Header,
    Paragraph,
    InfoCard,
    TestStatus,
    MetricCard,
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
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;

    * {
      height: 100%;
      @media screen and (max-width: 1200px) {
        grid-column-start: span 2;
      }
    }

    .welcome, .test-status {
      grid-column-start: span 4;
    }
  }
}
</style>
