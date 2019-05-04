<template>
  <div class="slip">
    <Paragraph small>{{ toolkit }}</Paragraph>
    <Paragraph small>{{ metric }}</Paragraph>
    <Paragraph small>{{ status }}</Paragraph>
    <ProgressBar
      :progress="progress"
      class="progress"
      width="4.5rem"
    ></ProgressBar>
    <Checkbox class="checkbox"></Checkbox>
    <Icon :src="userIcon" height="40px"></Icon>
  </div>
</template>

<script>
export default {
  name: 'TestStatusSlip',
  props: {
    toolkit: {
      type: String,
      default: 'unknown',
    },
    metric: {
      type: String,
      default: 'unknown',
    },
    status: {
      type: String,
      default: 'unknown',
    },
    progress: {
      type: Number,
      default: 0,
    },
    userIcon: {
      type: String,
      default: require('/../data/img/ui/user.svg'),
    },
  },
}
</script>

<style lang="scss" scoped>
.slip {
  grid-column-start: span 6;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 0.5fr;

  .progress {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .checkbox {
    text-align: center;
  }

  * {
    margin-right: 0.5rem;
  }
}
</style>
