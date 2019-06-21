<template>
  <div class="settings">
    <Header s3>Settings</Header>
    <div class="content">
      <Card>
        <Header s4>Account</Header>
        <Paragraph>name: {{ user.name }}</Paragraph>
        <Paragraph>display name: {{ user.callname }}</Paragraph>
        <Paragraph>email: {{ user.email }}</Paragraph>
        <Button link="/profile">edit</Button>
      </Card>
      <Card>
        <Header s4>Workspace</Header>
        <Paragraph>name: {{ workspace.name }}</Paragraph>
        <Paragraph>
          created:
          {{ creationDate }}
        </Paragraph>
        <Paragraph>Members:</Paragraph>
        <ul v-if="workspace.members">
          <li
            v-for="m in workspace.members"
            :key="workspace.members.indexOf(m)"
          >
            {{ `${m.callname} (${m.email})` }}
          </li>
        </ul>
        <InviteForm></InviteForm>
      </Card>
      <Card class="danger-zone">
        <Header s4>Danger Zone</Header>
        <Button outlined @click="confirmDelete">delete this workspace</Button>
      </Card>
    </div>
  </div>
</template>

<script>
import Component from '~/scripts/component'
import LabeledInput from '~/components/molecular/LabeledInput'
import ConfirmDelete from './settings/ConfirmDelete'
import InviteForm from './settings/InviteForm'
import { formatDate, parseDate } from '~/scripts/date'
import { mapState, mapActions } from 'vuex'

export default new Component({
  name: 'Settings',
  components: {
    LabeledInput,
    InviteForm,
  },
  created() {
    this.fetchMembers()
  },
  computed: {
    ...mapState('workspace', ['workspace']),
    ...mapState('user', { user: 'info' }),
    creationDate() {
      return this.workspace
        ? formatDate(parseDate(this.workspace.created))
        : 'unknown'
    },
  },
  methods: {
    ...mapActions('workspace', ['fetchMembers', 'deleteWorkspace']),
    confirmDelete() {
      this.$root.$children[0].showPopup({
        component: ConfirmDelete,
        callback: this.deleteWorkspace,
        props: {
          workspace: this.workspace.name,
        },
      })
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
