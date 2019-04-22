<template>
  <div :class="getClass">
    <Card class='flipwrap'>
      <div class='front'>
        <Icon :src="img"></Icon>
        <Header quaternary>
          {{ name }}
        </Header>
      </div>
      <div class='back'>
        <Header tertiary>
          Who is our customer?
        </Header>
        <Paragraph>
          Understand your customer is key.
        </Paragraph>
      </div>
    </Card>
  </div>
</template>

<script>
import Molecular from '/components/sharedScripts/molecular'
import Header from '/components/atomic/Header'
import Paragraph from '/components/atomic/Paragraph'
import Card from '/components/atomic/Card'
import Icon from '/components/atomic/Icon'

export default new Molecular({
  name: 'ToolkitCard',
  components: {
    Header,
    Icon,
    Card,
    Paragraph
  },
  props: {
    name: String,
  },
  computed: {
    img: () => require('/../data/img/toolkits/placeholder.svg'),
  },
})
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/colors.scss';

.toolkit-card {
  background-color: transparent;
  height: 17rem;
  perspective: 1000px;
  
  &:hover {
    .flipwrap {
      transform: rotateY(180deg);
    }
  }
  
  .flipwrap {
    width: 100%;
    height: 100%;
    transition: transform .5s;
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
    }

    .front, .back {
      padding: 1rem;
      box-sizing: border-box;
      @include colorScheme('neutral');
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
