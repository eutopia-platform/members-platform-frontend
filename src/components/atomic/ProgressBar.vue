<template>
  <div class="bar" :style="styleBar">
    <div class="progress" :style="styleProgress"></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    progress: {
      type: Number,
      default: 0.5,
    },
    width: {
      type: String,
      default: '5rem',
    },
  },
  data: () => ({
    clEmpty: 0x66bbff,
    clFull: 0x62f1cf,
  }),
  computed: {
    styleBar: (self = this) => ({
      width: self.width,
      height: `calc(${self.width} / 10)`,
      borderRadius: `calc(${self.width} / 20)`,
    }),
    styleProgress: (self = this) => ({
      width: `calc(${self.width} * ${self.progress})`,
      borderRadius: `calc(${self.width} / 20)`,
      backgroundColor: `#${Math.round(
        (((self.clEmpty >> 16) +
          ((self.clFull >> 16) - (self.clEmpty >> 16)) * self.progress) <<
          16) +
          ((((self.clEmpty >> 8) & 0xff) +
            (((self.clFull >> 8) & 0xff) - ((self.clEmpty >> 8) & 0xff)) *
              self.progress) <<
            8) +
          (((self.clEmpty & 0xff) +
            ((self.clFull & 0xff) - (self.clEmpty & 0xff)) * self.progress) |
            0)
      )
        .toString(16)
        .padStart(6, '0')}`,
    }),
  },
}
</script>

<style lang="scss" scoped>
.bar {
  background-color: #f2f2f2;
  display: table;

  .progress {
    height: 100%;
  }
}
</style>
