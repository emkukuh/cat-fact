import 'antd/dist/antd.css'
import { List, Avatar, Layout, Button } from 'antd'

import Navbar from '../components/navbar/navbar'

export async function getServerSideProps() {
  const response = await fetch('https://catfact.ninja/facts?limit=5')
  const datas = await response.json()
  return {
    props: {
      datas: datas.data,
    }
  }
}

export default function Home({ datas }) {
  const fetchCats = async () => {
    const response = await fetch
  }
  return (
    <div>
      <Layout>
        <Navbar />
      </Layout>
      <List
        itemLayout='horizontal'
        dataSource={datas}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={`Length: ${item.length}`}
              description={item.fact}
            />
          </List.Item>
        )}
      />
    </div>
  )
}
