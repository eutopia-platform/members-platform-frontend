<template>
  <Icon :src="img" :class="getClass"></Icon>
</template>

<script>
import Atomic from '~/scripts/atomic'
import Identicon from 'identicon.js'

export default new Atomic({
  name: 'UserIcon',
  props: {
    userId: {
      type: String,
      default: '',
    },
    size: {
      type: Number,
      default: 250,
    },
  },
  computed: {
    img: function() {
      try {
        return (
          'data:image/png;base64,' +
          new Identicon(base64ToHex(this.userId), {
            size: this.size,
          }).toString()
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
