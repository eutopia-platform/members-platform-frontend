<template>
  <div :class="getClass">
    <MarkdownDisplay :markdown="learning"></MarkdownDisplay>
  </div>
</template>

<script>
import Component from '~/scripts/component'
import MarkdownDisplay from '~/components/molecular/MarkdownDisplay'
import { mapGetters } from 'vuex'

export default new Component({
  name: 'Learning',
  components: {
    MarkdownDisplay,
  },
  computed: mapGetters('toolkit', ['learning']),
})
</script>
