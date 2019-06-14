<template>
  <div :class="getClass">
    <Card class="flipwrap">
      <div class="front">
        <Icon big :src="img"></Icon>
        <Header s4>{{ title }}</Header>
      </div>
      <div class="back">
        <MarkdownDisplay :markdown="description"></MarkdownDisplay>
        <Button @click="$router.push(`canvas/${id}`)">Use Toolkit</Button>
      </div>
    </Card>
  </div>
</template>

<script>
import Molecular from '/scripts/molecular'
import MarkdownDisplay from './MarkdownDisplay'

export default new Molecular({
  name: 'ToolkitCard',
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: 'unknown toolkit',
    },
    description: {
      type: String,
      required: true,
    },
    img: String,
  },
  components: {
    MarkdownDisplay,
  },
})
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/colors.scss';

.toolkit-card {
  background-color: transparent;
  height: 22rem;
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
    overflow: initial;

    .front {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .icon {
        height: 5rem;
      }
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
