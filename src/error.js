export class CubeError extends Error {
  constructor(msg) {
    super(msg)
  }
}

export default {
  methods: {
    showError(msg = 'Error') {
      this.$root.$children[0].handleError(new CubeError(msg))
    },
  },
}
