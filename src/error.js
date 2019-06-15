export class CubeError extends Error {
  constructor(error) {
    super(typeof error === 'string' ? error : error.message)
    this.code = this.message.replace('GraphQL error:', '').trim()
  }

  get notLoggedIn() {
    return this.code === 'NOT_LOGGED_IN'
  }
}

export default {
  methods: {
    showError(msg = 'Error') {
      this.$root.$children[0].handleError(new CubeError(msg))
    },
  },
}
