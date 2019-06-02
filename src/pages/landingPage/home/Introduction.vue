<template>
  <div class="intro" :style="style">
    <div v-if="showWelcome" class="welcome">
      <Icon big class="logo" :src="logo"></Icon>
      <Header s2>{{ welcome_1 }}</Header>
      <Header s1 class="text-big">{{ welcome_2 }}</Header>
    </div>
    <div v-if="showGroup1" class="group-1">
      <Header s3>{{ group1Small }}</Header>
      <Header s2>{{ group1Big }}</Header>
      <Icon :src="group1Icon" :class="{ rocket: showRocket }"></Icon>
    </div>
    <div v-if="showSignup" class="signup">
      <Icon :src="logo"></Icon>
      <Header s1 :class="{ transparent: !showSignupSmall }">scale your</Header>
      <Header s1 :class="{ transparent: !showSignupBig }">startup</Header>
      <EmailSignup :class="{ transparent: !showEmailForm }"></EmailSignup>
    </div>
    <div class="ring">
      <div class="ring-inner" :style="style"></div>
    </div>
    <div
      v-for="i in num_checks"
      :key="i"
      class="check"
      :style="getCheckPos(i)"
      :class="getCheckClass(i)"
    ></div>
  </div>
</template>

<script>
import frames from './animation'
import EmailSignup from '/components/molecular/EmailSignup'

export default {
  name: 'Introduction',
  components: {
    EmailSignup,
  },
  data: () => ({
    frames: frames,
    frame_val: -1,
    num_checks: 6,
    welcome_1: '',
    welcome_2: '',
  }),
  computed: {
    group1Small: function() {
      return this.getAnimProp('group1').small
    },
    group1Big: function() {
      return 'YOUR ' + this.getAnimProp('group1').big
    },
    group1Icon: function() {
      return this.getAnimProp('group1').icon
    },
    signupSmall: function() {
      return this.getAnimProp('signup').small
    },
    signupBig: function() {
      return this.getAnimProp('signup').big
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
    showGroup1: function() {
      return this.frames[this.frame].hasOwnProperty('group1')
    },
    showSignup: function() {
      return this.frames[this.frame].hasOwnProperty('signup')
    },
    showEmailForm: function() {
      const signup = this.frames[this.frame].signup
      return signup ? signup.form : false
    },
    showSignupSmall: function() {
      const signup = this.frames[this.frame].signup
      return signup ? signup.small : false
    },
    showSignupBig: function() {
      const signup = this.frames[this.frame].signup
      return signup ? signup.big : false
    },
    showWelcome: function() {
      return this.frames[this.frame].hasOwnProperty('welcome')
    },
    showRocket: function() {
      return this.frames[this.frame].rocket
    },
    logo: () => require('/../data/img/ui/logo.svg'),
  },
  mounted: function() {
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    animate: function() {
      this.frame++
      setTimeout(
        () => window.requestAnimationFrame(this.animate),
        this.frames[this.frame].time ? this.frames[this.frame].time : 0
      )
    },
    typeHello: function() {
      const type = (i, str, target, callback) => {
        if (i >= str.length) {
          if (callback) callback()
          return
        }
        this[target] += str[i]
        setTimeout(() => type(++i, str, target, callback), 50)
      }
      type(0, 'This is how you use Cube', 'welcome_1', () =>
        type(0, 'to build and launch an MVP.', 'welcome_2', () =>
          setTimeout(this.animate, 2000)
        )
      )
    },
    getCheckPos: function(i) {
      const off = (4 / 3) * Math.PI
      return {
        left: `calc(50% + ${Math.sin(
          off + (i / this.num_checks) * 2 * -Math.PI
        ) * 20}rem)`,
        top: `calc(50% + ${Math.cos(
          off + (i / this.num_checks) * 2 * -Math.PI
        ) * 20}rem)`,
      }
    },
    getCheckClass: function(i) {
      let step = this.frame - 1
      let stage = 0
      if (step < (i - 1) * 3) stage = 0
      else if (step > (i - 1) * 3 + 2) stage = 3
      else stage = step - (i - 1) * 3 + 1
      return 'stage-' + stage
    },
    getAnimProp: function(prop) {
      let i = this.frame
      while (!this.frames[i].hasOwnProperty(prop)) {
        i = i - 1 < 0 ? this.frames.length - 1 : i - 1
        if (i === this.frame) return 'initial'
      }
      return this.frames[i][prop]
    },
    onScroll: function() {
      if (window.scrollY > this.$el.offsetTop - this.$el.offsetHeight / 6) {
        this.typeHello()
        window.removeEventListener('scroll', this.onScroll)
      }
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
  position: relative;
  margin: 0;
  top: 0;

  @media screen and (max-width: 700px) {
    .ring,
    .check {
      display: none;
    }
  }

  .logo {
    transform: scale(2) !important;
  }

  * {
    z-index: 1;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    color: white;
    margin: 0;
  }

  .center-big {
    margin: 0;
  }

  .group-1 {
    text-align: center;

    * {
      position: static;
      transform: none;
      &:first-child {
        margin-bottom: 1rem;
      }
    }
    .icon {
      margin-top: 1.5rem;
      height: 10rem;
      width: 10rem;

      &.rocket {
        transform: translateY(-1000px);
        transition: transform 1s cubic-bezier(0.82, 0.03, 0.98, 0.69);
      }
    }
  }

  .signup {
    text-align: center;
    * {
      position: static;
      transform: none;
    }

    .email-signup {
      position: relative;
      transform: translateX(-50%) !important;
    }

    .icon {
      transform: scale(3);
    }

    .transparent {
      opacity: 0;
    }
  }

  .welcome {
    text-align: center;
    width: 40rem;

    @media screen and (max-width: 700px) {
      .header {
        transform: scale(0.7);
      }
    }

    * {
      position: static;
      transform: none;
    }

    .header {
      height: 3rem;
    }

    .icon {
      margin-bottom: 2rem;
      width: 7rem;
    }
  }

  .ring {
    z-index: 0;
    margin: 1px;
    background-color: white;
    width: 40.25rem;
    height: 40.25rem;
    border-radius: 50%;

    .ring-inner {
      width: calc(100% - 0.5rem);
      height: calc(100% - 0.5rem);
      border-radius: 50%;
    }
  }

  .check {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 0.2rem solid transparent;
    -webkit-transition: background-color 100ms linear;
    -ms-transition: background-color 100ms linear;
    transition: background-color 100ms linear;
  }

  .stage-0 {
    opacity: 0;
  }

  .stage-1 {
    background-color: #ffffff;
  }

  .stage-2 {
    background-color: #e6b940;
    border-color: white;
  }

  .stage-3 {
    background-color: #54ab8a;
    border-color: white;
  }
}
</style>
