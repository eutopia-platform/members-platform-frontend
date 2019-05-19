<template>
  <div class="workflow">
    <div class="textblock">
      <Header secondary>Step by step towards products that people love</Header>
      <Header tertiary>Use guiding processes and feedback from successful entrepreneurs</Header>
    </div>
    <div class="screen"></div>

    <div class="textblock">
      <Header secondary>Data driven decisions to turn ideas into results</Header>
      <Header tertiary>Set KPIs, run experiments and see the performance impact in real time</Header>
    </div>
    <div class="screen"></div>

    <div class="textblock">
      <Header secondary>Always stay on top of important events</Header>
      <Header tertiary>Our dashboard brings you up to speed on what your team is doing</Header>
    </div>
    <div class="screen"></div>
  </div>
</template>

<script>
export default {
  name: 'Workflow',
}
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/colors';

.workflow {
  @include colorScheme('primary');

  width: 100vw;
  height: 400vh;
  background: linear-gradient(#6bc1ff, #5969f6);
  padding-top: 1px;

  text-align: center;

  .textblock {
    margin-top: 10rem;
    margin-bottom: 5rem;
  }

  .screen {
    width: 70vw;
    height: 40vw;
    background: white;
    margin: auto;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
}
</style>
