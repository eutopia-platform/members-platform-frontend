<template>
  <div :class="getClass">
    <Popup>
      <div>
        <Header s4>{{ title }}</Header>
        <Paragraph>{{ description }}</Paragraph>
        <Input v-model="inputText" />
        <Break></Break>
        <div class="buttons">
          <Button primary @click="$emit('cancel')">cancel</Button>
          <Button
            :disabled="inputText !== confirmation"
            secondary
            @click="$emit('confirmed')"
          >
            {{ buttonConfirm }}
          </Button>
        </div>
      </div>
    </Popup>
  </div>
</template>

<script>
import Molecular from '/components/sharedScripts/molecular'
import Popup from '/components/molecular/Popup'

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
    buttonConfirm: {
      type: String,
      default: 'confirm',
    },
  },
  data() {
    return {
      inputText: '',
    }
  },
  components: {
    Popup,
  },
})
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;
  * {
    flex-grow: 1;
  }
}
</style>
