<template>
  <div :class="getClass">
    <Loader v-if="toolkit === null"></Loader>
    <template v-else>
      <Paragraph>ID: {{ toolkit.id }}</Paragraph>
      <ActionInput
        v-model="toolkit.title"
        label="title"
        button="update"
        :default-value="toolkit.title"
        @submit="submitChange"
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
        <Button outlined @click="submitChange">save</Button>
      </div>
      <MarkdownEdit
        v-model="toolkit.description"
        view
        :default-text="toolkit.description"
      ></MarkdownEdit>

      <div class="field-title">
        <Header s3>Workflow</Header>
        <Button outlined @click="submitChange">save</Button>
      </div>
      <MarkdownEdit
        v-model="toolkit.workflow"
        view
        :default-text="toolkit.workflow"
      ></MarkdownEdit>

      <div class="field-title">
        <Header s3>Learning</Header>
        <Button outlined @click="submitChange">save</Button>
      </div>
      <MarkdownEdit
        v-model="toolkit.learning"
        view
        :default-text="toolkit.learning"
      ></MarkdownEdit>

      <div class="field-title">
        <Header s3>Canvas</Header>
        <Button outlined @click="submitChange">save</Button>
      </div>
      <CanvasEdit
        v-model="toolkit.canvas"
        :canvas="toolkit.canvas"
      ></CanvasEdit>
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
import Toolkit from '~/schema/toolkit'

export default new Component({
  name: 'Editor',
  computed: mapState('toolkit', ['currentKit']),
  watch: {
    currentKit(v) {
      this.toolkit = new Toolkit(v)
      this.kit = new Toolkit(v)
    },
  },
  created() {
    this.fetchToolkit(this.$route.params.id)
  },
  data() {
    return {
      toolkit: null,
    }
  },
  components: {
    ActionInput,
    MarkdownEdit,
    CanvasEdit,
  },
  methods: {
    ...mapActions('toolkit', ['fetchToolkit', 'editToolkit']),
    submitChange() {
      this.editToolkit(this.toolkit)
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
