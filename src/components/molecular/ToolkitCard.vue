<template>
  <div :class="getClass">
    <Card class="flipwrap">
      <div class="front">
        <Icon :src="img"></Icon>
        <Header s4>{{ title }}</Header>
      </div>
      <div class="back">
        <Header s3>
          {{
            description
              ? (t => t[0] + t[1])(description.split(/([\.\?])/))
              : 'unknown'
          }}
        </Header>
        <Paragraph>
          {{
            description
              ? (t => t.splice(2, t.length).join(''))(
                  description.split(/([\.\?])/)
                )
              : 'unknown'
          }}
        </Paragraph>
        <Button @click="$router.push('canvas')">Use Toolkit</Button>
      </div>
    </Card>
  </div>
</template>

<script>
import Molecular from '/components/sharedScripts/molecular'

export default new Molecular({
  name: 'ToolkitCard',
  props: {
    title: {
      type: String,
      default: 'unknown toolkit',
    },
    description: String,
    img: String,
  },
})
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/colors.scss';

.toolkit-card {
  background-color: transparent;
  height: 20rem;
  perspective: 1000px;

  &:hover {
    .flipwrap {
      transform: rotateY(180deg);
    }
  }

  .flipwrap {
    width: 100%;
    height: 100%;
    transition: transform 0.5s;
    position: relative;
    transform-style: preserve-3d;
    background-color: initial;

    .front {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    .back {
      transform: rotateY(180deg);
      overflow: scroll;
      .button {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .front,
    .back {
      padding: 1rem;
      box-sizing: border-box;
      @include colorScheme('surface');
      backface-visibility: hidden;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }
}
</style>
