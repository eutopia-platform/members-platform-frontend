<template>
  <div :class="getClass">
    <div class="title">
      <Header s4>Workflow</Header>
      <Header s4>Customer Journey Map</Header>
    </div>
    <Paragraph>1. Actor</Paragraph>
    <Paragraph>2. Scenario and goals</Paragraph>
    <Paragraph>3. Phases of the customer journey</Paragraph>
    <Paragraph>4. Actions, mindset and emotions</Paragraph>
    <Paragraph>5. Insights, opportunities and ownership</Paragraph>
    <Paragraph>6. Use the result for the design process</Paragraph>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'

export default new Component({
  name: 'Workflow',
})
</script>

<style lang="scss" scoped>
.workflow {
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
}
</style>
