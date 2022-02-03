import { SWRConfig } from 'swr'
import { fetchApi } from '../services/api'
import '../styles/globals.css'
import 'antd/dist/antd.css'
import PageLayout from 'components/page-layout'

function MyApp({ Component, pageProps }) {
  return (
    <PageLayout>
      <Component {...pageProps} />
      <SWRConfig
        value={{
          refreshInterval: 0,
          revalidateIfStale: false,
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
          fetcher: fetchApi
        }}>
      </SWRConfig>
    </PageLayout>
  )
}

export default MyApp
