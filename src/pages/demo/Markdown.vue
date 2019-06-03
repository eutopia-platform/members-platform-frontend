<template>
  <div :class="getClass">
    <div class="mark-wrap">
      <Card class="input">
        <Textedit ref="textedit" v-model="input"></Textedit>
      </Card>
      <Card class="output">
        <MarkdownDisplay :markdown="input"></MarkdownDisplay>
      </Card>
    </div>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import Textedit from '/components/molecular/Textedit'
import MarkdownDisplay from '/components/molecular/MarkdownDisplay'

export default new Component({
  name: 'MarkdownDemo',
  data: {
    input: '',
  },
  components: {
    Textedit,
    MarkdownDisplay,
  },
  mounted() {
    this.$refs.textedit.$el.value = '# Markdown Demo'
    this.$refs.textedit.$el.dispatchEvent(new Event('input'))
  },
})
</script>

<style lang="scss" scoped>
.markdown-demo {
  padding: 2rem;

  .mark-wrap {
    width: calc(100vw - 4rem);
    justify-content: space-between;
    display: flex;

    .card {
      width: calc(50% - 0.5rem);
      height: 100vh;
    }

    @media screen and (max-width: 800px) {
      flex-direction: column-reverse;

      .card {
        height: 50vh;
        width: 100%;
      }
    }
  }
}
</style>
