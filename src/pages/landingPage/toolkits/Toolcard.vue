<template>
  <Card :class="getClass">
    <Header quaternary>{{ title }}</Header>
    <Icon :src="img"></Icon>
  </Card>
</template>

<script>
import Component from '/components/sharedScripts/Component'

export default new Component({
  name: 'Toolcard',
  props: {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.toolcard {
  width: 100%;
  margin-right: 1rem;
  margin-left: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: #fffe !important;
  box-shadow: 0px 2px 5px white !important;

  .icon {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
}
</style>
