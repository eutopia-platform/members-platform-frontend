<template>
  <div class="settings">
    <Header tertiary>Settings</Header>
    <div class="content">
      <Card>
        <Header quaternary>Profile</Header>
        <LabeledInput
          v-model="user.name"
          label="name"
          :default-value="user.name"
          :size="20"
        ></LabeledInput>
        <LabeledInput
          v-model="user.callname"
          label="nickname"
          :default-value="user.callname"
          :size="20"
        ></LabeledInput>
        <Paragraph>
          Workspaces: {{ workspaces.map(s => s.name).join(', ') }}
        </Paragraph>
        <Button small @click="submitProfile">submit</Button>
      </Card>
      <Card>
        <Header quaternary>Workspace</Header>
        <Paragraph>name: {{ workspace ? workspace.name : '' }}</Paragraph>
        <Paragraph>
          created:
          {{ (workspace ? workspace.created : null) || '?' }}
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
        <Header quaternary>Danger Zone</Header>
        <Button @click="confirmDelete = true">delete this workspace</Button>
        <Confirmation
          v-if="confirmDelete"
          title="Are you sure?"
          description="Do you really want to delete this workspace? This action cannot not be undone! Please type the name of this workspace if you want to proceed."
          :confirmation="workspace.name"
          @confirmed="deleteWorkspace"
        ></Confirmation>
      </Card>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Component from '/components/sharedScripts/component'
import LabeledInput from '/components/molecular/LabeledInput'
import Confirmation from '/components/molecular/Confirmation'
import InviteForm from './settings/InviteForm'

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
    Confirmation,
  },
  data: {
    user: {
      name: '',
      callName: '',
      email: '',
    },
    workspaces: [],
    confirmDelete: false,
  },
  methods: {
    submitProfile: function() {
      this.$apollo.mutate({
        mutation: gql`
          mutation { 
            setName(name: "${this.user.name}" callname: "${
          this.user.callname
        }") {
              callname
            }
          }
        `,
        update: (store, { data: { setName } }) => {
          store.writeQuery({
            query: gql`
              {
                user {
                  callname
                }
              }
            `,
            data: { user: setName },
          })
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
        .then(() => this.$router.push('/space'))
    },
    onError(err) {
      throw err
    },
  },
})
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/colors.scss';

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
    border: 0.1rem solid $c-error;
  }
}
</style>
