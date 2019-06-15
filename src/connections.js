import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { onError } from 'apollo-link-error'
import { handleGraphError } from '~/error'

const createClient = (url, sendToken = false) => {
  const client = new ApolloClient({
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
      onError(handleGraphError),
      createHttpLink({
        uri: url,
        credentials: 'same-origin',
      }),
    ]),
    cache: new InMemoryCache(),
  })
  return client
}

export default (process.env.NODE_ENV === 'development'
  ? {
      auth: createClient('http://localhost:4000'),
      user: createClient('http://localhost:5000', true),
      tool: createClient('http://localhost:7000', true),
      mail: createClient('http://localhost:9000'),
      work: createClient('http://localhost:11000', true),
    }
  : {
      auth: createClient('https://auth.api.productcube.io/'),
      user: createClient('https://user.api.productcube.io', true),
      tool: createClient('https://tool.api.productcube.io', true),
      mail: createClient('https://mail.api.productcube.io'),
      work: createClient('https://work.api.productcube.io', true),
    })
