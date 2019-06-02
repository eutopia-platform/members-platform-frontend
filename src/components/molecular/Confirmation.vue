<template>
  <div :class="getClass">
    <Popup>
      <div>
        <Header s4>{{ title }}</Header>
        <Paragraph>{{ description }}</Paragraph>
        <Input v-model="inputText" />
        <Break></Break>
        <Button
          :disabled="inputText !== confirmation"
          secondary
          @click="$emit('confirmed')"
        >
          Yes, I want to delete this workspace
        </Button>
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
  },
  data: {
    inputText: '',
  },
  components: {
    Popup,
  },
})
</script>
