<template>
  <div class='bar' :style='styleBar'>
    <div class='progress' :style='styleProgress'></div>
  </div>
</template>

<script>
const interpolate = (cl1, cl2, n) =>
  ((cl1 >> 16) + ((cl2 >> 16) - (cl1 >> 16)) * n << 16) +
  ((cl1 >> 8 & 0xFF) + ((cl2 >> 8 & 0xFF) - (cl1 >> 8 & 0xFF)) * n << 8) +
  ((cl1 & 0xFF) + ((cl2 & 0xFF) - (cl1 & 0xFF)) * n | 0)

export default {
  name: 'ProgressBar',
  props: {
    progress: {
      type: Number,
      default: .5
    },
    width: {
      type: String,
      default: '5rem'
    }
  },
  data: () => ({
    clEmpty: 0x66BBFF,
    clFull: 0x62F1CF
  }),
  computed: {
    styleBar: (self = this) => ({
      width: self.width,
      height: `calc(${self.width} / 10)`,
      borderRadius: `calc(${self.width} / 20)`
    }),
    styleProgress: (self = this) => ({
      width: `calc(${self.width} * ${self.progress})`,
      borderRadius: `calc(${self.width} / 20)`,
      backgroundColor: `#${Math.round(
        ((self.clEmpty >> 16) + ((self.clFull >> 16) - (self.clEmpty >> 16)) * self.progress << 16) +
        ((self.clEmpty >> 8 & 0xFF) + ((self.clFull >> 8 & 0xFF) - (self.clEmpty >> 8 & 0xFF)) * self.progress << 8) +
        ((self.clEmpty & 0xFF) + ((self.clFull & 0xFF) - (self.clEmpty & 0xFF)) * self.progress | 0)
      ).toString(16).padStart(6, '0')}`
    })
  }
}
</script>

<style lang='scss' scoped>
.bar {
  background-color: #f2f2f2;
  display: table;

  .progress {
    height: 100%;
  }
}
</style>
