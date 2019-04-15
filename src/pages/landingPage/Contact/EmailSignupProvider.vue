<template>
  <div>
    <EmailSignup @mySubmit="onSubmit"></EmailSignup>
    <div
      class="graphql-response-div"
      :class="{
        success: this.graphqlResponse.successful,
        error: this.graphqlResponse.unsuccessful,
      }"
      v-html="graphqlResponse.message"
    ></div>
  </div>
</template>

<script>
import EmailSignup from '../../../components/molecular/EmailSignup.vue'

export default {
  name: 'EmailSignupProvider',
  components: {
    EmailSignup,
  },
  data: () => ({
    email: '',
    graphqlConnection: {
      url:
        process.env.NODE_ENV !== 'development'
          ? 'https://api.productcube.io/mail'
          : 'http://localhost:3000/mail',
      mutationName: 'addEmail',
      mutationQuery: 'ok', //add msg here when it exists
    },
    graphqlResponse: {
      successful: false,
      unsuccessful: false,
      message: '',
    },
  }),

  methods: {
    handleResponce(payload) {
      this.graphqlResponse.successful = payload.ok
      this.graphqlResponse.unsuccessful = !payload.ok
      if (payload.ok) {
        this.graphqlResponse.message = 'Success!'
      } else {
        this.graphqlResponse.message = 'Error. ' /* + payload.msg*/
      }
    },
    onSubmit(payload) {
      const email = payload.email.value

      //graphql ajax request

      //IMPORTANT: Quotes within the query must be double backslash escaped because neither JSON nor GraphQL allow single quotes.
      const graphqlQueryString =
        '{"query": "mutation { ' +
        this.graphqlConnection.mutationName +
        '(email: \\"' +
        email +
        '\\") { ' +
        this.graphqlConnection.mutationQuery +
        ' } }"}'

      this.ajaxRequest = true
      this.$http
        .post(this.graphqlConnection.url, graphqlQueryString)
        .then(result =>
          this.handleResponce(
            result.data.data[this.graphqlConnection.mutationName]
          )
        )
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../components/sharedStyles/colors.scss';

.graphql-response-div {
  margin-top: 1rem;
}

.success {
  color: green;
}

.error {
  color: red;
}
</style>
