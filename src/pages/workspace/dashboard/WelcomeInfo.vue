<template>
  <Card>
    <div class="info">
      <Icon :src="iconInfo"></Icon>
      <Paragraph>
        Welcome to the dashboard of your workspace &mdash; the new home of your
        project.
        <Break></Break>
        Manage toolkits and processes and always stay on top of the progress
        your team is making.
      </Paragraph>
      <Button
        icon
        class="close"
        type="icon"
        :img="iconClose"
        @click="close"
      ></Button>
    </div>
  </Card>
</template>

<script>
export default {
  name: 'WelcomeInfo',
  computed: {
    iconInfo: () => require('/../data/img/ui/info.svg'),
    iconClose: () => require('/../data/img/ui/close.svg'),
  },
  methods: {
    close: function() {
      this.$el.style.display = 'none'
    },
  },
}
</script>

<style lang="scss" scoped>
.info {
  position: relative;
  display: flex;
  *:nth-child(1n) {
    margin-right: 1.5rem;
  }

  .close {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: -0.5rem;
    margin-right: -0.5rem;
  }
}
</style>
