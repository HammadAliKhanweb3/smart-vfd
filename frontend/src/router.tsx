import { createRouter } from '@tanstack/react-router'
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query'
import * as TanstackQuery from './integrations/tanstack-query/root-provider'
import { routeTree } from './routeTree.gen'
import { ApolloProvider } from '@apollo/client/react'
import { apolloClient } from './lib/apollo-client'
import { ThemeProvider } from './components/theme-provider'

// Import the generated route tree


// Create a new router instance
export const getRouter = () => {
  const rqContext = TanstackQuery.getContext()

  const router = createRouter({
    routeTree,
    context: { ...rqContext },
    defaultPreload: 'intent',
    Wrap: (props: { children: React.ReactNode }) => {
      return (
        <TanstackQuery.Provider {...rqContext}>
          <ApolloProvider client={apolloClient}>
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                {props.children}
            </ThemeProvider>
          </ApolloProvider>
        </TanstackQuery.Provider>
      )
    },
  })

  setupRouterSsrQueryIntegration({ router, queryClient: rqContext.queryClient })

  return router
}
