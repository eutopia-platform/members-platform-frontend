<template>
  <div :class="getClass" :style="backColor">
    <form style="position: absolute">
      <label>
        elevation:
        <input
          type="range"
          min="0"
          max="50"
          value="0"
          step="0.1"
          @input="changeHeight"
        />
      </label>
      <br />
      <br />
      <label>
        <input type="checkbox" checked @input="toggleAmbient" />
        show ambient
      </label>
      <br />
      <label>
        <input type="checkbox" checked @input="toggleSpot" />
        show spot
      </label>
      <br />
      <br />
      <label @input="setBackground">
        background color:
        <input type="color" value="#e5e5e5" />
      </label>
      <br />
      <label>
        light pos:
        <input
          type="range"
          min="0"
          max="2"
          value="0"
          step="0.01"
          @input="changeLight"
        />
        {{ Math.round((lightPos / Math.PI) * 100) / 100 }}&pi; rad
      </label>
      <br />
      <br />
      ambient:
      {{
        Object.entries(calcAmbientShadow())
          .map(e => `${e[0]}: ${Math.round(e[1] * 100) / 100}`)
          .join(' | ')
      }}
      <br />
      spot:
      {{
        Object.entries(calcSpotShadow())
          .map(e => `${e[0]}: ${Math.round(e[1] * 100) / 100}`)
          .join(' | ')
      }}
      <br />
      <br />
      <label>
        <input type="checkbox" checked @input="toggleBlur" />
        blur
      </label>
      <br />
      <label>
        <input type="checkbox" checked @input="toggleAlpha" />
        proportional alpha
      </label>
      <br />
      <label>
        <input type="checkbox" @input="toggleColor" />
        color shadows
      </label>
    </form>
    <Card ref="card" :style="shadow">
      Elevation:
      {{ prettyRound(cardHeight, 2) }}
    </Card>
  </div>
</template>

<script>
import Component from '~/scripts/component'

const shadowToCSS = (shadow, color = { r: 0, g: 0, b: 0 }) =>
  `${shadow.x}px ${shadow.y}px ${shadow.blur}px rgba(${color.r}, ${color.g}, ${
    color.b
  }, ${shadow.alpha})`

const intDig = n => (Math.log10(n | 0) + 1) | 0

export default new Component({
  name: 'ShadowDemo',
  data: () => ({
    cardHeight: 0,
    ambient: true,
    spot: true,
    color: false,
    backgroundColor: '#e5e5e5',
    lightPos: 0,
    blur: true,
    alpha: true,
  }),
  computed: {
    backColor() {
      return {
        'background-color': this.backgroundColor,
      }
    },
    shadow() {
      const shadows = [
        ...(this.ambient
          ? [
              shadowToCSS(
                this.calcAmbientShadow(),
                this.color ? { r: 0, g: 255, b: 0 } : { r: 0, g: 0, b: 0 }
              ),
            ]
          : []),
        ...(this.spot
          ? [
              shadowToCSS(
                this.calcSpotShadow(),
                this.color ? { r: 255, g: 0, b: 0 } : { r: 0, g: 0, b: 0 }
              ),
            ]
          : []),
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
    toggleBlur({ srcElement: { checked } }) {
      this.blur = checked
    },
    toggleAlpha({ srcElement: { checked } }) {
      this.alpha = checked
    },
    setBackground({ srcElement: { value } }) {
      this.backgroundColor = value
    },
    changeLight({ srcElement: { value } }) {
      this.lightPos = value * Math.PI
    },
    calcAmbientShadow() {
      return {
        x: (Math.sin(this.lightPos) * this.cardHeight) / 4,
        y: (Math.cos(this.lightPos) * this.cardHeight) / 4,
        blur: this.blur ? this.cardHeight : 0,
        alpha: this.alpha
          ? ((1 / (this.cardHeight / 100 + 1)) * 38) / 100
          : 0.38,
      }
    },
    calcSpotShadow() {
      return {
        x: Math.sin(this.lightPos) * this.cardHeight,
        y: Math.cos(this.lightPos) * this.cardHeight,
        blur: this.blur ? this.cardHeight * 0.8 : 0,
        alpha: this.alpha
          ? ((1 / (this.cardHeight / 100 + 1)) * 24) / 100
          : 0.24,
      }
    },
    prettyRound: (n, d) =>
      Math.round(n * (d > intDig(n) ? 10 ** (d - intDig(n)) : 1)) /
      (d > intDig(n) ? 10 ** (d - intDig(n)) : 1),
  },
  mounted() {
    this.$refs.card.$el.style.boxShadow = 'none'
  },
})
</script>

<style lang="scss" scoped>
.shadow-demo {
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
    box-shadow: none;
  }
}
</style>
