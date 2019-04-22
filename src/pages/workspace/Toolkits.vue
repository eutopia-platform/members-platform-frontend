<template>
  <div class="toolkits">
    <Header tertiary>
      Toolkits
    </Header>
    <div class="grid">
      <Toolkit v-for="i in 100" name="Toolkit">{{ i }}</Toolkit>
    </div>
  </div>
</template>

<script>
import Header from '/components/atomic/Header'
import Card from '/components/atomic/Card'
import Toolkit from '/components/molecular/ToolkitCard'

export default {
  name: 'Toolkits',
  components: {
    Header,
    Card,
    Toolkit,
  },
}
</script>

<style lang="scss" scoped>
.toolkits {
  display: flex;
  flex-direction: column;

  .grid {
    margin-top: 1rem;
    flex-grow: 1;
    width: 100%;
    max-width: 50rem;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3vw;
  }
}
</style>
