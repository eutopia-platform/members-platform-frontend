<template>
  <div :class="getClass" :style="backColor">
    <form style="position: absolute">
      <label>
        elevation:
        <input
          type="range"
          min="0"
          max="50"
          v-on:input="changeHeight"
          value="0"
          step="0.1"
        >
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
      <label @input="setBackground">
        background color:
        <input type="color" value="#e5e5e5">
      </label>
      <br>
      <label>
        light pos:
        <input type="range" min="0" max="2" value="0" step="0.01" @input="changeLight">
        {{Math.round((lightPos / Math.PI - 0.5) * 100) / 100}}&pi; rad
      </label>
    </form>
    <Card
      ref="card"
      :style="shadow"
    >Elevation: {{Math.round(cardHeight * (cardHeight < 20 ? 100 : 1) ) / (cardHeight < 20 ? 100 : 1) }}</Card>
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
    backgroundColor: '#e5e5e5',
    lightPos: Math.PI / 2,
  },
  computed: {
    backColor() {
      return {
        'background-color': this.backgroundColor,
      }
    },
    shadow() {
      const el = this.cardHeight

      const pos = Math.PI / 2

      const spotShadow = `${Math.cos(this.lightPos) * el}px ${Math.sin(
        this.lightPos
      ) * el}px 
      ${el * 0.8}px rgba(${this.color ? '255, 0, 0' : '0, 0, 0'}, ${((1 /
        (el / 100 + 1)) *
        24) /
        100})`

      const ambientShadow = `${(Math.cos(this.lightPos) * el) / 4}px ${Math.sin(
        this.lightPos
      ) * el}px ${el}px rgba(${this.color ? ' 0, 255, 0' : '0, 0, 0'}, ${((1 /
        (el / 100 + 1)) *
        38) /
        100})`

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
      this.cardHeight = (value / 7) ** 3
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
    changeLight({ srcElement: { value } }) {
      this.lightPos = value * Math.PI + Math.PI / 2
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
  background-color: #e5e5e5;

  .card {
    width: 10rem;
    height: 10rem;
    border-radius: 0.5rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
  }
}
</style>
