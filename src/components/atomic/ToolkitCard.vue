<template>
  <div class="toolkit-card">
    <div class="banner">
      <Paragraph type="sub" color="secondary">{{banner}}</Paragraph>
    </div>
    <div class="content">
      <Header type="quaternary">
        {{name}}
      </Header>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import Paragraph from './Paragraph.vue'

export default {
  name: "ToolkitCard",
  props: {
    name: String,
    banner: String
  },
  components: {
    Header,
    Paragraph
  }
}
</script>

<style lang="scss" scoped>
@import "../sharedStyles/shadows.scss";
@import "../sharedStyles/colors.scss";

.toolkit-card {
  min-width: 15rem;
  min-height: 15rem;
  max-width: 20rem;
  max-height: 20rem;
  width: 25vw;
  height: 25vw;
  box-sizing: border-box;
  background: white;
  box-shadow: $shadow-default;
  position: relative;

  .content {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
  }

  .banner {
    position: absolute;
    background: $c-primary-dark;
    top: 0;
    right: 0;
    padding: .25rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
</style>
