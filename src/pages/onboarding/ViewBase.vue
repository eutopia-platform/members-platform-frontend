<template>
  <div>
    <Logo></Logo>
    <div class="view">
      <div class="content-half">
        <div class="content-section">
          <slot></slot>
        </div>
      </div>
      <div class="image-wrap">
        <img v-bind:src="img">
        <div class="dashboard">
          <slot name="dashboard"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../../components/atomic/Logo.vue";
import Header from "../../components/atomic/Header.vue";
import Paragraph from "../../components/atomic/Paragraph.vue";
import Small from "../../components/atomic/Small.vue";
import Input from "../../components/atomic/Input.vue";
import Button from "../../components/atomic/Button.vue";

export default {
  name: "ViewBase",
  components: {
    Logo,
    Header,
    Paragraph,
    Input,
    Button
  },
  props: {
    img: String,
    info: Object,
    submit: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    text: String
  }),
  methods: {
    onSubmit: function() {
      this.$emit("next", this.$data);
    },
    onInputValueChange: function(payload) {
      this.text = payload;
    }
  },
  computed: {
    inputValid: comp => comp.text.value && comp.text.value.length > 0
  },
  mounted: function() {
    if (this.$options.name === 'ViewBase') return // only render dashboard in child component

    const drawDashboard = (self = this) => {
      const img = this.$el.querySelector('img');
      const iw = img.offsetWidth / 100;
      const ih = img.offsetHeight / 100;

      if (!img || !img.offsetWidth || !img.offsetHeight) {
        setTimeout(drawDashboard, 100)  // try again later
        return
      }

      // position & size dashboard
      const dashboard = this.$el.querySelector(".dashboard");
      dashboard.setAttribute(
        "style",
        `
        left: ${img.offsetLeft - img.offsetWidth / 2}px;
        top: ${img.offsetTop - img.offsetHeight / 2}px;
        width: ${img.offsetWidth}px;
        height: ${img.offsetHeight}px;
      `
      );

      // position dashboard elements
      const orga = this.$el.querySelector(".organization");
      if (orga) {
        orga.setAttribute(
          "style",
          `
          left: ${4.3 * iw}px;
          top: ${11 * ih}px;
          font-size: ${
            orga.textContent.length < 18
              ? 5 * ih
              : (18.0 / orga.textContent.length) * 5 * ih
          }px;
          visibility: visible;
        `
        );
      }
      const email = this.$el.querySelector(".email");
      if (email) {
        email.setAttribute(
          "style",
          `
          left: ${15 * iw}px;
          top: ${21 * ih}px;
          font-size: ${
            email.textContent.length < 14
              ? 4 * ih
              : (14.0 / email.textContent.length) * 4 * ih
          }px;
          visibility: visible;
        `
        );
      }
      const ini_title = this.$el.querySelector(".ini-title");
      if (ini_title) {
        ini_title.setAttribute(
          "style",
          `
          left: ${45 * iw}px;
          top: ${9 * ih}px;
          font-size: ${
            ini_title.textContent.length < 30
              ? 5 * ih
              : (30.0 / ini_title.textContent.length) * 5 * ih
          }px;
          visibility: visible;
        `
        );
      }
      const ini_icon = this.$el.querySelector(".ini-icon");
      if (ini_icon) {
        ini_icon.setAttribute(
          "style",
          `
          left: ${12 * iw}px;
          top: ${32.2 * ih}px;
          font-size: ${
            ini_icon.textContent.length < 24
              ? 3 * ih
              : (24.0 / ini_icon.textContent.length) * 3 * ih
          }px;
          visibility: visible;
        `
        );
      }
      const member_title = this.$el.querySelector(".member-title");
      if (member_title) {
        member_title.setAttribute(
          "style",
          `
          left: ${5 * iw}px;
          top: ${67 * ih}px;
          font-size: ${3.5 * ih}px;
          visibility: visible;
        `
        );
      }
      const members = this.$el.querySelector(".members");
      if (members) {
        members.setAttribute(
          "style",
          `
          left: ${7 * iw}px;
          top: ${68 * ih}px;
          font-size: ${3 * ih}px;
          visibility: visible;
        `
        );
      }
    };

    drawDashboard()
    window.addEventListener("resize", drawDashboard);
  }
};
</script>

<style lang="scss" scoped>
@import "../../components/sharedStyles/colors.scss";
@import "../../components/sharedStyles/responsive.scss";

.logo {
  position: absolute;
  top: 0;
  left: 0;
  margin: 2rem;
}

.view {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;

  .content-half {
    width: 50vw;
  }

  .image-wrap {
    width: 50vw;
    height: 100vh;

    img {
      max-width: 80%;
      max-height: 80%;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  }

  .content-section {
    display: inline-block;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 41ch;
    max-height: 80vh;
    // overflow: scroll;
  }

  .input-wrap {
    width: 35ch;
    margin-top: 2rem;

    * {
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 1.5rem;
      max-width: none;
    }
  }
}

@media screen and (max-width: $break-mobile) {
  .view {
    flex-direction: column-reverse;
  }

  .content-half,
  .image-wrap {
    width: 100vw !important;
  }

  .content-half {
    flex-grow: 2;
  }

  .image-wrap {
    flex-grow: 1;
  }

  .logo {
    margin: 0 !important;
    transform: scale(0.5);
  }
}

.dashboard {
  $side-ratio: 424 / 530;
  $img-unit: 40vw / 100;
  $img-left: 40vw;

  position: absolute;

  & * :not(li) {
    position: absolute;
    visibility: hidden;
    transform: translateY(-100%);
    margin-top: 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
    transform: none;

    li {
      margin-bottom: 0.2rem;
    }
  }
}
</style>
