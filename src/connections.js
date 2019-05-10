import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'

const createClient = (url, sendToken = false) =>
  new ApolloClient({
    link: ApolloLink.from([
      ...(sendToken
        ? [
            setContext(() => ({
              headers: {
                'session-token': localStorage.getItem('sessionToken'),
              },
            })),
          ]
        : []),
      createHttpLink({
        uri: url,
        credentials: 'same-origin',
      }),
    ]),
    cache: new InMemoryCache(),
  })

export default (process.env.NODE_ENV === 'development'
  ? {
      auth: createClient('http://localhost:4000'),
      user: createClient('http://localhost:5000', true),
      tool: createClient('http://localhost:7000'),
      mail: createClient('http://localhost:9000'),
      work: createClient('http://localhost:11000', true),
    }
  : {
      auth: createClient('https://auth.api.productcube.io/'),
      user: createClient('https://user.api.productcube.io', true),
      tool: createClient('https://tool.api.productcube.io'),
      mail: createClient('https://mail.api.productcube.io'),
      work: createClient('https://work.api.productcube.io', true),
    })
