<template>
  <div :class="getClass">
    <Loader v-if="toolkit === null"></Loader>
    <template v-else>
      <Paragraph>ID: {{ toolkit.id }}</Paragraph>
      <ActionInput
        label="title"
        button="update"
        :default-value="toolkit.title"
        @submit="saveTitle"
      ></ActionInput>

      <div class="visibility">
        <Paragraph>
          This toolkit is
          {{ toolkit.visibility === 'PUBLIC' ? 'public' : 'not public' }}
        </Paragraph>
        <Button
          v-if="toolkit.visibility !== 'PUBLIC'"
          outlined
          @click="publishToolkit"
        >
          Publish
        </Button>
      </div>

      <Button outlined @click="deleteToolkit">Delete Toolkit</Button>

      <div class="field-title">
        <Header s3>Description</Header>
        <Button outlined @click="saveDescription">save</Button>
      </div>
      <MarkdownEdit
        v-model="toolkit.description_markdown"
        view
        :default-text="toolkit.description_markdown"
      ></MarkdownEdit>

      <div class="field-title">
        <Header s3>Workflow</Header>
        <Button outlined @click="saveWorkflow">save</Button>
      </div>
      <MarkdownEdit
        v-model="toolkit.workflow"
        view
        :default-text="toolkit.workflow"
      ></MarkdownEdit>

      <div class="field-title">
        <Header s3>Learning</Header>
        <Button outlined @click="saveLearning">save</Button>
      </div>
      <MarkdownEdit
        v-model="toolkit.learning"
        view
        :default-text="toolkit.learning"
      ></MarkdownEdit>

      <div class="field-title">
        <Header s3>Canvas</Header>
        <Button outlined @click="saveCanvas">save</Button>
      </div>
      <CanvasEdit v-model="canvas" :canvas="toolkit.canvas"></CanvasEdit>
    </template>
  </div>
</template>

<script>
import Component from '~/scripts/component'
import ActionInput from '~/components/molecular/ActionInput'
import MarkdownEdit from '~/components/molecular/MarkdownEdit'
import CanvasEdit from './editor/CanvasEdit'
import gql from 'graphql-tag'
import { mapState, mapActions } from 'vuex'

export default new Component({
  name: 'Editor',
  computed: mapState('toolkit', { toolkit: 'currentKit' }),
  created() {
    this.fetchToolkit(this.$route.params.id)
  },
  data() {
    return {
      canvas: {},
    }
  },
  components: {
    ActionInput,
    MarkdownEdit,
    CanvasEdit,
  },
  methods: {
    ...mapActions('toolkit', ['fetchToolkit']),
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
    saveWorkflow() {
      this.$apollo.mutate({
        client: 'tool',
        mutation: gql`
          mutation updateWorkflow($id: ID!, $workflow: String) {
            editToolkit(toolkit: { id: $id, workflow: $workflow }) {
              id
              workflow
            }
          }
        `,
        variables: {
          id: this.toolkit.id,
          workflow: encodeURI(this.toolkit.workflow),
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
    saveCanvas() {
      const canvas = JSON.stringify({
        meta: this.canvas.meta,
        boxes: this.canvas.boxes.map(box =>
          Object.assign({}, box, { content: encodeURI(box.content) })
        ),
      })
      this.$apollo.mutate({
        client: 'tool',
        mutation: gql`
          mutation updateCanvas($id: ID!, $canvas: String) {
            editToolkit(toolkit: { id: $id, canvas: $canvas }) {
              id
              canvas
            }
          }
        `,
        variables: {
          id: this.toolkit.id,
          canvas,
        },
      })
    },
    deleteToolkit() {
      this.$apollo
        .mutate({
          client: 'tool',
          mutation: gql`
            mutation deleteToolkit($id: ID!) {
              deleteToolkit(id: $id)
            }
          `,
          variables: {
            id: this.toolkit.id,
          },
        })
        .then(() => this.$router.push('/admin/toolkits'))
    },
    publishToolkit() {
      this.$apollo.mutate({
        client: 'tool',
        mutation: gql`
          mutation publishToolkit($id: ID!, $status: String!) {
            setVisibility(id: $id, status: $status) {
              id
              visibility
            }
          }
        `,
        variables: {
          id: this.toolkit.id,
          status: 'PUBLIC',
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

  .visibility {
    display: flex;
    .button {
      margin-left: 2rem;
    }
  }
}
</style>
