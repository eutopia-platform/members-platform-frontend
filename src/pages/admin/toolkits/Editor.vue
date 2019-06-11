<template>
  <div :class="getClass">
    <Paragraph>ID: {{ toolkit.id }}</Paragraph>
    <ActionInput
      label="title"
      button="update"
      :default-value="toolkit.title"
    ></ActionInput>

    <div class="field-title">
      <Header s3>Description</Header>
      <Button>save</Button>
    </div>
    <MarkdownEdit
      v-model="toolkit.markdown_description"
      view
      :default-text="toolkit.description_markdown"
    ></MarkdownEdit>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import ActionInput from '/components/molecular/ActionInput'
import MarkdownEdit from '/components/molecular/MarkdownEdit'
import gql from 'graphql-tag'

export default new Component({
  name: 'Editor',
  apollo: {
    toolkit: {
      client: 'tool',
      query: gql`
        query editorKit($id: ID!) {
          toolkit(id: $id) {
            id
            title
            description_markdown
            canvas
            learning
          }
        }
      `,
      variables() {
        return {
          id: this.$route.params.id,
        }
      },
      result({ data: { toolkit } }) {
        toolkit.description_markdown = decodeURI(toolkit.description_markdown)
      },
    },
  },
  data() {
    return {
      toolkit: {
        id: '',
        title: '',
        description_markdown: '',
        canvas: '',
        learning: '',
      },
    }
  },
  components: {
    ActionInput,
    MarkdownEdit,
  },
})
</script>

<style lang="scss" scoped>
.editor {
  .field-title {
    margin-top: 2rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    * {
      margin: 0;
    }
  }

  .markdown-edit {
    width: 100%;
  }
}
</style>
