<template>
  <Card :class="getClass">
    <Icon
      src="https://s3.eu-central-1.amazonaws.com/eutopia.media/process/process_1.svg"
    ></Icon>
    <Header quaternary>Build and launch an MVP</Header>
  </Card>
</template>

<script>
import Component from '/components/sharedScripts/component'

export default new Component({
  name: 'ProcessCard',
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
}
</style>
