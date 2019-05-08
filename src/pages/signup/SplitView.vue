<template>
  <div>
    <Brand></Brand>
    <div class="view">
      <div class="content-half">
        <main class="content-section">
          <slot name="default"></slot>
          <div class="content-wrapper">
            <slot name="content"></slot>
          </div>
        </main>
      </div>
      <div class="content-half">
        <!-- <img class="content-section image" :src="imgSource" alt="" /> -->
        <div ref="imageContainer" class="content-section image" />
      </div>
    </div>
  </div>
</template>

<script>
import Brand from '../../components/molecular/Brand'

export default {
  name: 'SplitView',
  components: {
    Brand,
  },
  props: {
    imgSource: {
      type: String,
      default: '',
    },
  },
  mounted: function() {
    this.$refs.imageContainer.style.backgroundImage = `url(${this.imgSource})`
  },
}
</script>

<style lang="scss" scoped>
@import '../../components/sharedStyles/responsive.scss';

.brand {
  margin: 1rem;
}

.content-section {
  padding: 2rem;
}

.content-wrapper {
  width: 100%;
  margin-top: 2rem;
}

.image {
  display: none;
}

@media screen and (min-width: $break-mobile) {
  .view {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;

    .content-half {
      width: 50vw;
      height: 100vh;

      .content-section {
        position: relative;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 41ch;

        &.image {
          display: block;
          padding: 0;
          max-width: 80%;
          max-height: 80%;
          width: initial;
          height: 80%;

          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }

        .content-wrapper {
          width: 35ch;
          margin: 0;
        }
      }
    }
  }
}
</style>
