<template>
  <div :class="getClass">
    <div class="titlebar">
      <div class="tab" @click="tab = 'edit'">edit</div>
      <div class="tab" @click="tab = 'view'">view</div>
    </div>
    <div class="body">
      <Textedit
        v-if="tab === 'edit'"
        ref="edit"
        v-model="text"
        class="content"
        :default-text="text"
        @input="textInput"
      ></Textedit>
      <MarkdownDisplay
        v-else
        class="content"
        :markdown="text"
      ></MarkdownDisplay>
    </div>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import MarkdownDisplay from './MarkdownDisplay'
import Textedit from './Textedit'

export default new Component({
  name: 'MarkdownEdit',
  components: {
    MarkdownDisplay,
    Textedit,
  },
  data() {
    return {
      tab: 'edit',
      text: '',
    }
  },
  props: {
    defaultText: {
      type: String,
      default: '',
    },
  },
  watch: {
    defaultText(txt) {
      this.text = txt
    },
  },
  methods: {
    textInput() {
      this.$emit('input', this.text)
    },
  },
})
</script>

<style lang="scss" scoped>
.markdown-edit {
  width: 25rem;
  height: 20rem;
  border: 1px solid black;
  position: relative;

  .titlebar {
    display: flex;
    border-bottom: 1px solid black;

    .tab {
      margin: 0;
      height: 100%;
      flex-grow: 1;
      border-radius: 0;
      text-align: center;
      line-height: 2rem;
      cursor: pointer;

      &:first-child {
        border-right: 1px solid black;
      }
    }
  }

  .body {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: calc(100% - 2rem);
    padding: 1rem;

    .content {
      margin: 0;
      height: 100%;
    }
  }
}
</style>
