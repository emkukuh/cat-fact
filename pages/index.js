import 'antd/dist/antd.css'
import { List, Avatar, Layout, Button } from 'antd'
import Navbar from '../components/navbar/navbar'
import { useGetCatFacts } from '../services/api'

export default function Home() {
    const { loading, data: { data: factDatas } = {}, error } = useGetCatFacts(5)
    if (error) return <div>Failed to load...</div>
    // const datas = data.data
    return (
        <>
            <Layout>
                <Navbar />
            </Layout>
            <List
                itemLayout='horizontal'
                dataSource={factDatas}
                loading={loading}
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
        </>
    )
}
