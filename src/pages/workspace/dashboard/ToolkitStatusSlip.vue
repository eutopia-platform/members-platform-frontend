<template>
  <div class="slip">
    <Small>{{ name }}</Small>
    <Small>{{ status }}</Small>
    <ProgressBar
      :progress="progress"
      class="progress"
      width="4.5rem"
    ></ProgressBar>
    <Icon :src="userIcon" height="40px"></Icon>
  </div>
</template>

<script>
export default {
  name: 'ToolkitStatusSlip',
  props: {
    name: {
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
  grid-column-start: span 4;
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 1fr;

  .progress {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
