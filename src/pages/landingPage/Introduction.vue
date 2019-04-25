<template>
  <div class="intro" :style="style">
    <Header primary v-if="showCenterBig">{{centerBig}}</Header>
    <div v-if="showGroup1" class="group-1">
      <Header tertiary>{{group1Small}}</Header>
      <Header secondary>{{group1Big}}</Header>
      <Icon :src="group1Icon"></Icon>
    </div>
  </div>
</template>

<script>
import Header from '/components/atomic/Header'
import Icon from '/components/atomic/Icon'

export default {
  name: 'Introduction',
  data: () => ({
    frames: [
      {},
      {
        time: 200,
        background: '#5A6DEE',
        centerBig: "THIS"
      },
      {
        time: 200,
        centerBig: "IS"
      },
      {
        time: 2000,
        centerBig: "CUBE"
      },
      {
        time: 1000,
        background: '#7EC0FA',
        group1: {
          small: "YOU WRITE YOUR",
          big: "VISION STATEMENT",
          icon: require("/../data/img/landingpage/step1.svg"),
        }
      },
      {
        time: 1000,
        group1: {
          small: "YOU TEST YOUR",
          big: "VISION STATEMENT",
          icon: require("/../data/img/landingpage/step1.svg"),
        }
      },
      {
        time: 2000,
        group1: {
          small: "YOU VALIDATE YOUR",
          big: "VISION STATEMENT",
          icon: require("/../data/img/landingpage/step1.svg"),
        }
      },
      {
        time: 1000,
        background: '#F9DB6F',
        group1: {
          small: "YOU IDENTIFY YOUR",
          big: "EARLY ADOPTER",
           icon: require("/../data/img/landingpage/step1.svg"),
        }
      },
      {
        time: 1000,
        group1: {
          small: "YOU TEST YOUR",
          big: "EARLY ADOPTER",
           icon: require("/../data/img/landingpage/step1.svg"),
        }
      },
      {
        time: 2000,
        group1: {
          small: "YOU VALIDATE YOUR",
          big: "EARLY ADOPTER",
           icon: require("/../data/img/landingpage/step1.svg"),
        }
      },
      {
        time: 1000,
        background: '#5A6DEE',
        group1: {
          small: "YOU IDENTIFY THE",
          big: "PROBLEM",
           icon: require("/../data/img/landingpage/step1.svg"),
        }
      },
      {
        time: 1000,
        group1: {
          small: "YOU TEST THE",
          big: "PROBLEM",
           icon: require("/../data/img/landingpage/step1.svg"),
        }
      },
      {
        time: 2000,
        group1: {
          small: "YOU VALIDATE THE",
          big: "PROBLEM",
           icon: require("/../data/img/landingpage/step1.svg"),
        }
      },
      {
        time: 1000,
        background: '#BD7DD6',
        group1: {
          small: "YOU DEFINE YOUR",
          big: "VALUE HYPOTHESIS",
           icon: require("/../data/img/landingpage/step1.svg"),
        }
      },
      {
        time: 1000,
        group1: {
          small: "YOU TEST YOUR",
          big: "VALUE HYPOTHESIS",
           icon: require("/../data/img/landingpage/step1.svg"),
        }
      },
      {
        time: 2000,
        group1: {
          small: "YOU VALIDATE YOUR",
          big: "VALUE HYPOTHESIS",
           icon: require("/../data/img/landingpage/step1.svg"),
        }
      },
      {
        time: 1000,
        background: '#EA7363',
        group1: {
          small: "YOU DESIGN YOUR",
          big: "BUSINESS MODEL",
           icon: require("/../data/img/landingpage/step1.svg"),
        }
      },
      {
        time: 1000,
        group1: {
          small: "YOU TEST YOUR",
          big: "BUSINESS MODEL",
           icon: require("/../data/img/landingpage/step1.svg"),
        }
      },
      {
        time: 2000,
        group1: {
          small: "YOU VALIDATE YOUR",
          big: "BUSINESS MODEL",
           icon: require("/../data/img/landingpage/step1.svg"),
        }
      },
      {
        time: 1000,
        background: '#253DBC',
        group1: {
          small: "YOU BUILD YOUR",
          big: "MVP",
           icon: require("/../data/img/landingpage/step1.svg"),
        }
      },
      {
        time: 1000,
        group1: {
          small: "YOU LAUNCH YOUR",
          big: "MVP",
           icon: require("/../data/img/landingpage/step1.svg"),
        }
      },
      {
        time: 2000,
        group1: {
          small: "IT\'S TIME TO",
          big: "SCALE YOUR STARTUP",
           icon: require("/../data/img/landingpage/step1.svg"),
        }
      },
    ],
    frame_val: -1,
  }),
  computed: {
    centerBig: function() {
      return this.getAnimProp('centerBig')
    },
    group1Small: function() {
      return this.getAnimProp('group1').small
    },
    group1Big: function() {
      return this.getAnimProp('group1').big
    },
    group1Icon: function() {
      return this.getAnimProp('group1').icon
    },
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
    showCenterBig: function() {
      return this.frames[this.frame].hasOwnProperty('centerBig')
    },
    showGroup1: function() {
      return this.frames[this.frame].hasOwnProperty('group1')
    }
  },
  components: {
    Header,
    Icon
  },
  mounted: function() {
    this.animate()
  },
  methods: {
    animate: function() {
      this.frame++
      setTimeout(
        () => window.requestAnimationFrame(this.animate),
        this.frames[this.frame].time ? this.frames[this.frame].time : 0
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
  text-align: center;
  box-sizing: border-box;
  padding: 1px;

  & * {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    color: white;
  }

  .group-1 {
    .icon {
      margin-top: 5rem;
      height: 10rem;
      width: 10rem;
      display: block;
    }
  }
}
</style>
