<template>
  <div class="toolkit-card">
    <div class="banner">
      <Paragraph type="sub">{{ banner }}</Paragraph>
    </div>
    <div class="content">
      <Header quaternary>
        {{ name }}
      </Header>
      <img :src="img" />
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import Paragraph from './Paragraph.vue'

export default {
  name: 'ToolkitCard',
  props: {
    name: String,
    banner: String,
    img: String,
  },
  components: {
    Header,
    Paragraph,
  },
}
</script>

<style lang="scss" scoped>
@import '../sharedStyles/shadows.scss';
@import '../sharedStyles/colors.scss';

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
    & * {
      display: block;
    }
    img {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .banner {
    position: absolute;
    background-color: map-get($colors, primary-back);
    color: white;
    top: 0;
    right: 0;
    padding: 0.25rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
</style>
