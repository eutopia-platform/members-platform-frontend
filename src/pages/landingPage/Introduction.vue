<template>
  <div class="intro">
    <Header type="primary">
      Start building lean products
    </Header>
      <Tagline type="sub">Productcube provides you with guiding processes and the toolkits you need to develop products people will love.</Tagline>
    <div class="lean-tool">
      <ToolkitCard name="Lean Startup Toolkit" banner="full cycle program"
        :img="img"></ToolkitCard>
    </div>
  </div>
</template>

<script>
import Header from '../../components/atomic/Header'
import Tagline from '../../components/atomic/Tagline'
import Paragraph from '../../components/atomic/Paragraph'
import ToolkitCard from '../../components/atomic/ToolkitCard'

export default {
  name: "Introduction",
  components: {
    Header,
    Tagline,
    Paragraph,
    ToolkitCard
  },
  computed: {
    img: () => require('../../../data/img/landingpage/lean-icon.svg')
  }
}
</script>

<style lang="scss" scoped>
.intro {
  width: 100%;
  box-sizing: border-box;
  padding: 1em;
  padding-left: 4em;
  padding-right: 4em;
  margin-top: 3em;
  margin-bottom: 3em;

  .lean-tool {
    align-content: center;
    margin-top: 4rem;

    & * {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 1rem;
    }
  }
}
</style>
