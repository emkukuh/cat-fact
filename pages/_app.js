import { SWRConfig } from 'swr'
import { fetchApi } from 'services/api'
import '../styles/globals.css'
import 'antd/dist/antd.css'
import PageLayout from 'components/page-layout'

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 0,
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        fetcher: fetchApi
      }}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </SWRConfig>
  )
}

export default MyApp
