<template>
  <Card :class="getClass" @click="select">
    <Header quaternary>{{ kit.name }}</Header>
    <Icon :src="kit.icon"></Icon>
  </Card>
</template>

<script>
import Component from '/components/sharedScripts/component'
import Toolkit from './toolkit'

export default new Component({
  name: 'Toolcard',
  props: {
    kit: {
      type: Toolkit,
      required: true,
    },
  },
  methods: {
    select() {
      this.$emit('select', this)
    },
  },
})
</script>

<style lang="scss" scoped>
.toolcard {
  margin-right: 1rem;
  margin-left: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: #fffe !important;
  user-select: none;
  justify-content: space-around;

  .icon {
    margin-top: 1rem;
    margin-bottom: 2rem;
    flex-grow: 0.5;
  }
}
</style>
