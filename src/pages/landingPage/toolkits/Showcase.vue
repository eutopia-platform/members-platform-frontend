<template>
  <div :class="getClass">
    <div class="title">{{ kit.name }}</div>
    <Button>Use Toolkit</Button>
    <div class="description">
      <Paragraph v-for="t in kit.description" :key="kit.description.indexOf(t)">
        {{ t }}
      </Paragraph>
    </div>
    <Toolcard :title="kit.name" :img="kit.icon"></Toolcard>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import Toolcard from './Toolcard'
import Toolkit from './toolkit'

export default new Component({
  name: 'Showcase',
  components: {
    Toolcard,
  },
  props: {
    kit: {
      type: Toolkit,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.showcase {
  width: 80vw;
  margin: auto;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  display: grid;
}
</style>
