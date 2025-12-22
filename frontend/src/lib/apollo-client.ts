import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'


const wsLink = new GraphQLWsLink(
  createClient({ url: 'ws://localhost:3000/graphql' })
)

export const apolloClient = new ApolloClient({
  link: wsLink,
  cache: new InMemoryCache(),
})
