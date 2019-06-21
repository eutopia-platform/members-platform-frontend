<template>
  <div :class="getClass">
    <Header s2>Toolkits</Header>
    <template v-if="!loading">
      <Paragraph v-for="(kit, i) in toolkits" :key="i">
        <RouterLink :to="kit.id" append>{{ kit.title }}</RouterLink>
      </Paragraph>
    </template>
    <Loader v-else></Loader>
    <Button outlined @click="createToolkit">Add Toolkit</Button>
  </div>
</template>

<script>
import Component from '~/scripts/component'
import { mapState, mapActions } from 'vuex'

export default new Component({
  name: 'Toolkits',
  computed: mapState('toolkit', ['toolkits', 'loading']),
  created() {
    this.fetchToolkits()
  },
  methods: mapActions('toolkit', ['fetchToolkits', 'createToolkit']),
})
</script>

<style lang="scss" scoped></style>
