import VueApollo from "vue-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

function createApolloProvider() {
  // HTTP connexion to the API
  const httpLink = new HttpLink({
    // You should use an absolute URL here
    uri: "http://localhost:3020/graphql"
  });

  // Cache implementation
  const cache = new InMemoryCache();

  // Create the apollo client
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache
  });

  const apolloProvider = new VueApollo({
    defaultClient: apolloClient
  });

  return apolloProvider;
}

export default createApolloProvider;
