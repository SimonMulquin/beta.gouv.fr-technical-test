import Layout from '../components/Layout'
import { ApolloProvider } from '@apollo/client'
import apolloClient from '../lib/apollo'

function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default App