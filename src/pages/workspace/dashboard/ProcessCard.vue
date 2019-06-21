<template>
  <Card :class="getClass">
    <Icon
      :src="
        `https://s3.eu-central-1.amazonaws.com/eutopia.media/process/process_${imgNum}.svg`
      "
    ></Icon>
    <Header s4>{{ title }}</Header>
  </Card>
</template>

<script>
import Component from '~/scripts/component'

export default new Component({
  name: 'ProcessCard',
  props: {
    imgNum: {
      type: String,
      default: '1',
    },
    title: {
      type: String,
      default: 'Build and launch an MVP',
    },
  },
})
</script>

<style lang="scss" scoped>
.process-card {
  box-sizing: border-box;
  height: 10rem;
  width: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .icon {
    height: 3rem;
  }
}
</style>
