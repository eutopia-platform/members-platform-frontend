<template>
  <div class="intro" :style="style"></div>
</template>

<script>
export default {
  name: 'Introduction',
  data: () => ({
    frames: [
      {
        time: 1000,
        background: '#5A6DEE',
      },
      {
        time: 1000,
        background: '#7EC0FA',
      },
      {
        time: 1000,
        background: '#F9DB6F',
      },
      {
        time: 1000,
      },
      {
        time: 1000,
        background: '#5A6DEE',
      },
      {
        time: 1000,
        background: '#BD7DD6',
      },
      {
        time: 1000,
        background: '#EA7363',
      },
      {
        time: 1000,
        background: '#253DBC',
      },
    ],
    frame_val: -1,
  }),
  computed: {
    frame: {
      get: function() {
        return Math.max(this.frame_val, 0)
      },
      set: function(n) {
        this.frame_val = n % this.frames.length
      },
    },
    style: function() {
      return {
        backgroundColor: this.getAnimProp('background'),
      }
    },
  },
  mounted: function() {
    this.animate()
  },
  methods: {
    animate: function() {
      this.frame++
      setTimeout(
        () => window.requestAnimationFrame(this.animate),
        this.frames[this.frame].time ? this.frames[this.frame].time : 1000
      )
    },
    getAnimProp: function(prop) {
      let i = this.frame
      while (!this.frames[i].hasOwnProperty(prop)) {
        i = i - 1 < 0 ? this.frames.length - 1 : i - 1
        if (i === this.frame) return 'initial'
      }
      return this.frames[i][prop]
    },
  },
}
</script>

<style lang="scss" scoped>
.intro {
  height: 100vh;
  -webkit-transition: background-color 100ms linear;
  -ms-transition: background-color 100ms linear;
  transition: background-color 100ms linear;
}
</style>
