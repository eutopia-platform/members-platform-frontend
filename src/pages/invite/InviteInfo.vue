<template>
  <div :class="getClass">
    <Card class="content">
      <Header tertiary>
        You have been invited to join the {{ space }} workspace.
      </Header>
      <Button @click="accept">accept invitation</Button>
    </Card>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import gql from 'graphql-tag'

export default new Component({
  name: 'InviteInfo',
  props: {
    space: {
      type: String,
      default: 'unknown',
    },
  },
  methods: {
    accept() {
      this.$apollo
        .mutate({
          client: 'work',
          mutation: gql`
            mutation acceptInvite($link: String!) {
              joinWorkspace(inviteLink: $link) {
                name
              }
            }
          `,
          variables: {
            link: this.$route.params.code,
          },
        })
        .then(({ data: { joinWorkspace: { name } } }) => {
          this.$router.push('/space/' + name)
        })
    },
  },
})
</script>

<style lang="scss" scoped>
.invite-info {
  width: 100vw;
  height: 100vh;

  .content {
    width: 25rem;
    max-width: 100vw;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
  }
}
</style>
