<template>
  <div class="workflow">
    <div class="textblock">
      <Header s2>Always stay on top of important events</Header>
      <Header s3>
        Our dashboard brings you up to speed on what your team is doing
      </Header>
    </div>
    <Screen img="dashboard"></Screen>

    <div class="textblock">
      <Header s2>Step by step towards products that people love</Header>
      <Header s3>
        Use guiding processes and feedback from successful entrepreneurs
      </Header>
    </div>
    <Screen img="toolkit"></Screen>

    <div class="textblock">
      <Header s2>Data driven decisions to turn ideas into results</Header>
      <Header s3>
        Set KPIs, run experiments and see the performance impact in real time
      </Header>
    </div>
    <Screen img="analytics"></Screen>

    <Newsletter></Newsletter>
  </div>
</template>

<script>
import Screen from './workflow/Screen'
import Newsletter from './Newsletter'

export default {
  name: 'Workflow',
  components: {
    Screen,
    Newsletter,
  },
}
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/colors';

.workflow {
  @include colorScheme('primary');
  width: 100vw;
  background: linear-gradient(#6bc1ff, #5969f6);
  padding-top: 1px;

  text-align: center;

  .textblock {
    margin-top: 10rem;
    margin-bottom: 5rem;
  }
}
</style>
