<template>
  <div :class="getClass">
    <Header s2>Toolkits</Header>
    <Paragraph v-for="(kit, i) in toolkits" :key="i">
      <RouterLink :to="kit.id" append>{{ kit.title }}</RouterLink>
    </Paragraph>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import gql from 'graphql-tag'

export default new Component({
  name: 'Toolkits',
  apollo: {
    toolkits: {
      client: 'tool',
      query: gql`
        query adminToolkits {
          toolkits {
            id
            title
            description_markdown
            canvas
            learning
          }
        }
      `,
    },
  },
  data() {
    return {
      toolkits: [],
    }
  },
})
</script>

<style lang="scss" scoped></style>
