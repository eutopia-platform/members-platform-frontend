<template>
  <div class="settings">
    <Header s3>Settings</Header>
    <div class="content">
      <Card>
        <Header s4>Profile</Header>
        <LabeledInput
          v-model="user.name"
          label="name"
          autocomplete="name"
          :default-value="user.name"
          :size="20"
        ></LabeledInput>
        <LabeledInput
          v-model="user.callname"
          label="nickname"
          autocomplete="nickname"
          :default-value="user.callname"
          :size="20"
        ></LabeledInput>
        <Paragraph>
          Workspaces: {{ workspaces.map(s => s.name).join(', ') }}
        </Paragraph>
        <Button outlined @click="submitProfile">submit</Button>
      </Card>
      <Card>
        <Header s4>Workspace</Header>
        <Paragraph>name: {{ workspace ? workspace.name : '' }}</Paragraph>
        <Paragraph>
          created:
          {{ creationDate }}
        </Paragraph>
        <Paragraph>Members:</Paragraph>
        <ul v-if="workspace && workspace.members">
          <li
            v-for="m in workspace.members"
            :key="workspace.members.indexOf(m)"
          >
            {{ `${m.callname} (${m.email})` }}
          </li>
        </ul>
        <InviteForm @error="onError"></InviteForm>
      </Card>
      <Card class="danger-zone">
        <Header s4>Danger Zone</Header>
        <Button outlined @click="confirmDelete">delete this workspace</Button>
      </Card>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Component from '~/scripts/component'
import LabeledInput from '~/components/molecular/LabeledInput'
import ConfirmDelete from './settings/ConfirmDelete'
import InviteForm from './settings/InviteForm'
import { formatDate, parseDate } from '~/scripts/date'

export default new Component({
  name: 'Settings',
  apollo: {
    user: gql`
      {
        user {
          name
          callname
          email
          id
        }
      }
    `,
    workspaces: {
      query: gql`
        {
          workspaces {
            name
            created
          }
        }
      `,
      client: 'work',
    },
    workspace: {
      query: gql`
        query getWorkspace($name: String!) {
          workspace(name: $name) {
            name
            created
            members {
              callname
              email
            }
          }
        }
      `,
      client: 'work',
      variables() {
        return {
          name: localStorage.getItem('workspace'),
        }
      },
    },
  },
  components: {
    LabeledInput,
    InviteForm,
  },
  computed: {
    creationDate() {
      return this.workspace
        ? formatDate(parseDate(this.workspace.created))
        : 'unknown'
    },
  },
  data: () => ({
    user: {
      name: '',
      callName: '',
      email: '',
    },
    workspaces: [],
  }),
  methods: {
    submitProfile: function() {
      this.$apollo.mutate({
        mutation: gql`
          mutation { 
            setName(name: "${this.user.name}" callname: "${
          this.user.callname
        }") {
              id
              name
              callname
            }
          }
        `,
        update: (store, { data: { setName } }) => {
          store.writeQuery({
            query: gql`
              {
                user {
                  id
                  name
                  callname
                }
              }
            `,
            data: { user: setName },
          })
        },
      })
    },
    confirmDelete() {
      this.$root.$children[0].showPopup({
        component: ConfirmDelete,
        callback: this.deleteWorkspace,
        props: {
          workspace: this.workspace.name,
        },
      })
    },
    deleteWorkspace() {
      this.$apollo
        .mutate({
          client: 'work',
          mutation: gql`
            mutation deleteCurrentWorkspace($workspace: String!) {
              deleteWorkspace(name: $workspace)
            }
          `,
          variables: {
            workspace: this.workspace.name,
          },
        })
        .then(() => this.$router.push({ path: '/space' }))
    },
    onError(err) {
      throw err
    },
  },
})
</script>

<style lang="scss" scoped>
@import '/styles/colors.scss';

.settings {
  display: flex;
  flex-direction: column;

  .content {
    margin-top: 1rem;
    flex-grow: 1;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 3vw;
  }

  .danger-zone {
    border: 0.1rem solid color('error');
  }
}
</style>
