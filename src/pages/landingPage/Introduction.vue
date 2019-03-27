<template>
  <div class="intro">
    <Tagline type="sub">
      Productcube guides you through the build measure learn cycle, helps you
      manage experiments and ultimately empowers you to build products that
      people will love.
    </Tagline>
    <div class="lean-tool">
      <Paragraph>So you want to build a lean startup?</Paragraph>
      <ToolkitCard
        name="Lean Startup Toolkit"
        banner="full cycle program"
        :img="img"
      ></ToolkitCard>
    </div>
  </div>
</template>

<script>
import Tagline from "../../components/atomic/Tagline";
import Paragraph from "../../components/atomic/Paragraph";
import ToolkitCard from "../../components/atomic/ToolkitCard";

export default {
  name: "Introduction",
  components: {
    Tagline,
    Paragraph,
    ToolkitCard
  },
  computed: {
    img: () => require("../../../data/img/landingpage/lean-icon.svg")
  }
};
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
