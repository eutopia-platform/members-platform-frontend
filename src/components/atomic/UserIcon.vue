<template>
  <Icon :src="img" :class="getClass"></Icon>
</template>

<script>
import Atomic from '../sharedScripts/atomic'
import Identicon from 'identicon.js'

export default new Atomic({
  name: 'UserIcon',
  props: {
    userId: {
      type: String,
      default: '',
    },
  },
  computed: {
    img: function() {
      try {
        return (
          'data:image/png;base64,' +
          new Identicon(base64ToHex(this.userId)).toString()
        )
      } catch (e) {
        return 'https://s3.eu-central-1.amazonaws.com/eutopia.media/profile_pic_placeholder.svg'
      }
    },
  },
})

const base64ToHex = str =>
  atob(str)
    .split('')
    .map(c => c.charCodeAt(0).toString(16))
    .map(c => (c.length === 2 ? c : '0' + c))
    .join('')
</script>
