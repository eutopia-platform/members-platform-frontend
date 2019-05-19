<template>
  <div class="workflow">
    <div class="textblock">
      <Header secondary>Step by step towards products that people love</Header>
      <Header tertiary>
        Use guiding processes and feedback from successful entrepreneurs
      </Header>
    </div>
    <Screen img="toolkit"></Screen>

    <div class="textblock">
      <Header secondary>
        Data driven decisions to turn ideas into results
      </Header>
      <Header tertiary>
        Set KPIs, run experiments and see the performance impact in real time
      </Header>
    </div>
    <Screen img="analytics"></Screen>

    <div class="textblock">
      <Header secondary>Always stay on top of important events</Header>
      <Header tertiary>
        Our dashboard brings you up to speed on what your team is doing
      </Header>
    </div>
    <Screen img="dashboard"></Screen>
  </div>
</template>

<script>
import Screen from './workflow/Screen'

export default {
  name: 'Workflow',
  components: {
    Screen,
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
  padding-bottom: 5rem;

  text-align: center;

  .textblock {
    margin-top: 10rem;
    margin-bottom: 5rem;
  }
}
</style>
