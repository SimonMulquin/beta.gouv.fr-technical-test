import Layout from '../components/Layout'
import { ApolloProvider } from '@apollo/client'
import apolloClient from '../lib/apollo'
import '../reset.css';

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