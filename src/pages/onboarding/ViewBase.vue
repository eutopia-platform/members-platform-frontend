<template>
  <div class="view">
    <div class="view">
      <Logo></Logo>
      <div class="content-half">
        <div class="content-section">
          <slot></slot>
        </div>
      </div>
      <div class="image-wrap">
        <img v-bind:src="img"/>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '../../components/atomic/Logo.vue'
import Header from '../../components/atomic/Header.vue'
import Paragraph from '../../components/atomic/Paragraph.vue'
import Small from '../../components/atomic/Small.vue'
import Input from '../../components/atomic/Input.vue'
import Button from '../../components/atomic/Button.vue'

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
    info: Object
  },
  data: () => ({
    text: String
  }),
  methods: {
    onSubmit: function() { this.$emit('next', this.$data) },
    onInputValueChange: function(payload) {
      this.text = payload
    }
  },
  computed: {
    inputValid: comp => comp.text.value && comp.text.value.length > 0
  }
}
</script>

<style lang="scss" scoped>
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

  .logo {
    position: absolute;
    margin: 2rem;
  }

  .content-section {
    display: inline-block;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 41ch;
    max-height: 80vh;
    overflow: scroll;
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
</style>
