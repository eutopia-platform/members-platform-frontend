<template>
  <div :class="getClass">
    <Paragraph>ID: {{ toolkit.id }}</Paragraph>
    <ActionInput
      label="title"
      button="update"
      :default-value="toolkit.title"
      @submit="saveTitle"
    ></ActionInput>

    <div class="field-title">
      <Header s3>Description</Header>
      <Button @click="saveDescription">save</Button>
    </div>
    <MarkdownEdit
      v-model="toolkit.description_markdown"
      view
      :default-text="toolkit.description_markdown"
    ></MarkdownEdit>

    <div class="field-title">
      <Header s3>Learning</Header>
      <Button @click="saveLearning">save</Button>
    </div>
    <MarkdownEdit
      v-model="toolkit.learning"
      view
      :default-text="toolkit.learning"
    ></MarkdownEdit>

    <div class="field-title">
      <Header s3>Canvas</Header>
      <Button>save</Button>
    </div>
    <CanvasEdit :canvas="toolkit.canvas"></CanvasEdit>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import ActionInput from '/components/molecular/ActionInput'
import MarkdownEdit from '/components/molecular/MarkdownEdit'
import CanvasEdit from './editor/CanvasEdit'
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
        toolkit.learning = decodeURI(toolkit.learning)
        toolkit.canvas = JSON.parse(toolkit.canvas)
        toolkit.canvas.boxes.forEach(
          box => (box.content = decodeURI(box.content))
        )
      },
    },
  },
  data() {
    return {
      toolkit: {
        id: '',
        title: '',
        description_markdown: '',
        canvas: { boxes: [] },
        learning: '',
      },
    }
  },
  components: {
    ActionInput,
    MarkdownEdit,
    CanvasEdit,
  },
  methods: {
    saveTitle(title) {
      this.$apollo.mutate({
        client: 'tool',
        mutation: gql`
          mutation updateTitle($id: ID!, $title: String) {
            editToolkit(toolkit: { id: $id, title: $title }) {
              id
              title
            }
          }
        `,
        variables: {
          id: this.toolkit.id,
          title,
        },
      })
    },
    saveDescription() {
      this.$apollo.mutate({
        client: 'tool',
        mutation: gql`
          mutation updateDescription($id: ID!, $description: String) {
            editToolkit(toolkit: { id: $id, description: $description }) {
              id
              description
            }
          }
        `,
        variables: {
          id: this.toolkit.id,
          description: encodeURI(this.toolkit.description_markdown),
        },
      })
    },
    saveLearning() {
      this.$apollo.mutate({
        client: 'tool',
        mutation: gql`
          mutation updateLearning($id: ID!, $learning: String) {
            editToolkit(toolkit: { id: $id, learning: $learning }) {
              id
              learning
            }
          }
        `,
        variables: {
          id: this.toolkit.id,
          learning: encodeURI(this.toolkit.learning),
        },
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.editor {
  padding-bottom: 5rem;

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
