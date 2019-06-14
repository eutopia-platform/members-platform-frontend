<template>
  <div :class="getClass">
    <img
      :src="
        `https://s3.eu-central-1.amazonaws.com/eutopia.media/landingpage/workflow/screen_${img}.png`
      "
    />
  </div>
</template>

<script>
import Component from '~/scripts/component'

export default new Component({
  name: 'Screen',
  props: {
    img: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.screen {
  width: 70vw;
  height: 40vw;
  background: white;
  margin: auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
  overflow: hidden;

  img {
    width: 100%;
  }
}
</style>
