<template>
  <Card class="process">
    <PlaceholderCard :img-num="imgNum" :title="title"></PlaceholderCard>
    <div class="text">
      <div>
        <Paragraph v-if="text1">{{ text1 }}</Paragraph>
        <Paragraph v-if="text2">{{ text2 }}</Paragraph>
      </div>
    </div>
  </Card>
</template>

<script>
import { default as PlaceholderCard } from '../dashboard/ProcessCard'

export default {
  name: 'ProcessCard',
  components: {
    PlaceholderCard,
  },
  props: {
    text1: {
      type: String,
      default: null,
    },
    text2: {
      type: String,
      default: null,
    },
    imgNum: {
      type: String,
      default: '1',
    },
    title: {
      type: String,
      default: 'Build and launch an MVP',
    },
  },
}
</script>

<style lang="scss" scoped>
.process {
  display: flex;
  flex-direction: row;

  .text {
    flex-grow: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>
