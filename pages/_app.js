import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Navbar from '../components/navbar/Navbar'
import '../styles/globals.css'

function InnerApp({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
  </>
}

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient()
  return <>
    <QueryClientProvider client={queryClient} >
      <InnerApp Component={Component} pageProps={pageProps} />
    </QueryClientProvider>
  </>
}

export default MyApp
