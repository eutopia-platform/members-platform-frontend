<template>
  <div class="toolkits">
    <Header tertiary>Toolkits</Header>
    <div class="grid">
      <InfoCard>
        <Paragraph>
          Toolkits accelerate the development of ideas while building a solid foundation for your startup.
          <Break></Break>
          Based on templates, they help you to structure, test and validate your assumptions scientifically.
        </Paragraph>
      </InfoCard>
      <Toolkit v-for='i in toolkits' :title='i.title' :key="i"></Toolkit>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Header from '/components/atomic/Header'
import Card from '/components/atomic/Card'
import Paragraph from '/components/atomic/Paragraph'
import Break from '/components/atomic/Break'
import Toolkit from '/components/molecular/ToolkitCard'
import InfoCard from '/components/molecular/InfoCard'

export default {
  name: 'Toolkits',
  apollo: {
    $client: 'tool',
    toolkits: gql`{
      toolkits {
        title
      }
    }`
  },
  data: () => ({
    toolkits: []
  }),
  components: {
    Header,
    Toolkit,
    InfoCard,
    Paragraph,
    Break
  }
}
</script>

<style lang="scss" scoped>
.toolkits {
  display: flex;
  flex-direction: column;

  .grid {
    margin-top: 1rem;
    flex-grow: 1;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3vw;
  }
}
</style>
