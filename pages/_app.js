import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TopNavbar from '../components/navbar/TopNavbar'
import '../styles/globals.css'

function InnerApp({ Component, pageProps }) {
  return <>
    <TopNavbar />
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
