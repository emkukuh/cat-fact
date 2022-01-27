import 'antd/dist/antd.css'
import { List, Avatar, Layout, Button } from 'antd'
import Navbar from '../components/navbar/navbar'
import useSWR from 'swr'
import { fetchApi } from '../services/api'

export default function Home() {
    const { data, error } = useSWR('fatcs', fetchApi)
    if (error) return <div>Failed to load...</div>
    if (!data) return <div> Loading...</div>
    const datas = data.data
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
