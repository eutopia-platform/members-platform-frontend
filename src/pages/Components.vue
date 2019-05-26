<template>
  <div :class="getClass" :style="backColor">
    <form style="position: absolute">
      <label>
        elevation:
        <input type="range" min="0" max="200" v-on:input="changeHeight" value="0">
      </label>
      <br>
      <label>
        <input type="checkbox" @input="toggleAmbient" checked>ambient
      </label>
      <br>
      <label>
        <input type="checkbox" @input="toggleSpot" checked>spot
      </label>
      <br>
      <label>
        <input type="checkbox" @input="toggleColor">color shadows
      </label>
      <br>
      ambient: {{ambient && shadow['box-shadow'].split('),')[spot ? 1 : 0]}}
      <br>
      spot: {{spot && shadow['box-shadow'].split('),')[0] + (ambient ? ')' : '')}}
      <br>
      <label @input="setBackground">
        background color:
        <input type="color" value="#ffffff">
      </label>
    </form>
    <Card ref="card" :style="shadow">Elevation: {{cardHeight}}</Card>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'

export default new Component({
  name: 'Components',
  data: {
    cardHeight: 0,
    ambient: true,
    spot: true,
    color: false,
    backgroundColor: '#fff',
  },
  computed: {
    backColor() {
      return {
        'background-color': this.backgroundColor,
      }
    },
    shadow() {
      const el = this.cardHeight

      const spotShadow = `0 ${el}px ${el * 0.8}px rgba(${
        this.color ? '255, 0, 0' : '0, 0, 0'
      }, ${((1 / (el / 100 + 1)) * 24) / 100})`

      const ambientShadow = `0 ${el / 4}px ${el}px rgba(${
        this.color ? ' 0, 255, 0' : '0, 0, 0'
      }, ${((1 / (el / 100 + 1)) * 38) / 100})`

      const shadows = [
        ...(this.spot ? [spotShadow] : []),
        ...(this.ambient ? [ambientShadow] : []),
      ]

      return {
        'box-shadow': shadows.join(','),
      }
    },
  },
  methods: {
    changeHeight({ srcElement: { value } }) {
      this.cardHeight = value
    },
    toggleAmbient({ srcElement: { checked } }) {
      this.ambient = checked
    },
    toggleSpot({ srcElement: { checked } }) {
      this.spot = checked
    },
    toggleColor({ srcElement: { checked } }) {
      this.color = checked
    },
    setBackground({ srcElement: { value } }) {
      this.backgroundColor = value
    },
  },
  mounted() {
    this.$refs.card.$el.style.boxShadow = 'none'
  },
})
</script>

<style lang="scss" scoped>
.components {
  padding: 2rem;
  min-height: 100vh;
  box-sizing: border-box;

  .card {
    width: 20rem;
    height: 20rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
    padding-top: 8rem;
  }
}
</style>
