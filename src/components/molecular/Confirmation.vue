<template>
  <div :class="getClass">
    <Shade></Shade>
    <Card class="content">
      <div>
        <Header quaternary>{{ title }}</Header>
        <Paragraph>{{ description }}</Paragraph>
        <Input v-model="inputText" />
        <Break></Break>
        <Button
          :disabled="inputText !== confirmation"
          @click="$emit('confirmed')"
        >
          Yes, I want to delete this workspace
        </Button>
      </div>
    </Card>
  </div>
</template>

<script>
import Molecular from '/components/sharedScripts/molecular'

export default new Molecular({
  name: 'Confirmation',
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    confirmation: {
      type: String,
      default: '',
    },
  },
  data: {
    inputText: '',
  },
})
</script>

<style lang="scss" scoped>
.content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 30rem;
  max-width: 100vw;

  .input {
    width: 100%;
  }

  .button {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
