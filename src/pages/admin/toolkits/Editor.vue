<template>
  <div :class="getClass">
    <Loader v-if="toolkit === null"></Loader>
    <template v-else>
      <Button text link="/admin/toolkits">back to toolkits</Button>
      <div class="title-bar">
        <Header s2>Editor: {{ toolkit.title }}</Header>
        <Button color="secondary" @click="submitChange">save changes</Button>
      </div>
      <LabeledInput
        v-model="toolkit.title"
        label="title"
        :default-value="toolkit.title"
      ></LabeledInput>

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

      <Button outlined @click="deleteKit">Delete Toolkit</Button>

      <Header s3>Description</Header>
      <MarkdownEdit
        v-model="toolkit.description"
        view
        :default-text="toolkit.description"
      ></MarkdownEdit>

      <Header s3>Workflow</Header>
      <MarkdownEdit
        v-model="toolkit.workflow"
        view
        :default-text="toolkit.workflow"
      ></MarkdownEdit>

      <Header s3>Learning</Header>
      <MarkdownEdit
        v-model="toolkit.learning"
        view
        :default-text="toolkit.learning"
      ></MarkdownEdit>

      <Header s3>Canvas</Header>
      <CanvasEdit
        v-model="toolkit.canvas"
        :canvas="toolkit.canvas"
      ></CanvasEdit>
    </template>
  </div>
</template>

<script>
import Component from '~/scripts/component'
import LabeledInput from '~/components/molecular/LabeledInput'
import MarkdownEdit from '~/components/molecular/MarkdownEdit'
import CanvasEdit from './editor/CanvasEdit'
import gql from 'graphql-tag'
import { mapGetters, mapActions } from 'vuex'
import Toolkit from '~/schema/toolkit'

export default new Component({
  name: 'Editor',
  computed: mapGetters('toolkit', ['currentKit']),
  watch: {
    currentKit(v) {
      this.toolkit = new Toolkit(v)
    },
  },
  created() {
    if (this.currentKit && this.currentKit.id === this.$route.params.id)
      this.toolkit = new Toolkit(this.currentKit)
    else this.fetchToolkit(this.$route.params.id)
  },
  data() {
    return {
      toolkit: this.currentKit ? new Toolkit(this.currentKit) : null,
    }
  },
  components: {
    LabeledInput,
    MarkdownEdit,
    CanvasEdit,
  },
  methods: {
    ...mapActions('toolkit', ['fetchToolkit', 'editToolkit', 'deleteToolkit']),
    submitChange() {
      this.editToolkit(this.toolkit)
    },
    deleteKit() {
      this.deleteToolkit(this.toolkit.id)
      this.$router.push('/admin/toolkits')
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
  max-width: 1000px;
  margin: auto;

  .title-bar {
    margin-top: 1rem;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    * {
      margin: 0;
    }
  }

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

.loader {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%);
}
</style>
