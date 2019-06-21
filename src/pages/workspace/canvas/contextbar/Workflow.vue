<template>
  <div :class="getClass">
    <MarkdownDisplay
      v-if="workflow.length"
      :markdown="workflow"
    ></MarkdownDisplay>
    <Paragraph v-else>no workflow available</Paragraph>
    <Button outlined color="secondary">Milestone Challenge</Button>
  </div>
</template>

<script>
import Component from '~/scripts/component'
import MarkdownDisplay from '~/components/molecular/MarkdownDisplay'
import { mapGetters } from 'vuex'

export default new Component({
  name: 'Workflow',
  computed: mapGetters('toolkit', ['workflow']),
  components: {
    MarkdownDisplay,
  },
})
</script>

<style lang="scss" scoped>
.workflow {
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }

  .button {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
