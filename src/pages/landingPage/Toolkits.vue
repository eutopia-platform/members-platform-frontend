<template>
  <div class="toolkits">
    <Header class="selection-title" tertiary>
      Whatever the goal, our toolkits get you started
    </Header>
    <div class="selection">
      <Toolcard
        title="User Interview"
        img="https://s3.eu-central-1.amazonaws.com/eutopia.media/toolkit/kit_1.svg"
      ></Toolcard>
      <Toolcard
        title="Empathy Map"
        img="https://s3.eu-central-1.amazonaws.com/eutopia.media/toolkit/kit_2.svg"
      ></Toolcard>
      <Toolcard
        title="User Flow Design"
        img="https://s3.eu-central-1.amazonaws.com/eutopia.media/toolkit/kit_3.svg"
      ></Toolcard>
      <Toolcard
        title="Business Model Canvas"
        img="https://s3.eu-central-1.amazonaws.com/eutopia.media/toolkit/kit_4.svg"
      ></Toolcard>
    </div>
  </div>
</template>

<script>
import Toolcard from './toolkits/Toolcard'

export default {
  name: 'Toolkits',
  components: {
    Toolcard,
  },
}
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/colors';

.toolkits {
  @include colorScheme('primary');
  width: 100vw;
  height: 400vh;
  background: linear-gradient(#6bc1ff, #5969f6);
  padding-top: 7rem;

  .selection-title {
    text-align: center;
    margin-bottom: 2rem;
  }

  .selection {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80vw;
    margin: auto;
  }
}
</style>
