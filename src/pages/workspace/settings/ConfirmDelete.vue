<template>
  <Confirmation
    title="Are you sure?"
    description="Do you really want to delete this workspace? This action cannot not be undone! Please type the name of this workspace if you want to proceed."
    :confirmation="workspace"
    button-confirm="delete workspace"
    @confirmed="onConfirmed"
    @cancel="onCancel"
  ></Confirmation>
</template>

<script>
import Component from '/components/sharedScripts/component'
import Confirmation from '/components/molecular/Confirmation'

export default new Component({
  name: 'ConfirmDelete',
  props: {
    callback: {
      type: Function,
      required: true,
    },
    workspace: {
      type: String,
      required: true,
    },
  },
  methods: {
    onCancel() {
      this.$el.remove()
    },
    onConfirmed() {
      this.$el.remove()
      this.callback()
    },
  },
  components: {
    Confirmation,
  },
})
</script>

<style lang="scss" scoped></style>
