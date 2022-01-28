import 'antd/dist/antd.css'
import { List, Avatar, Layout } from 'antd'
import Navbar from '../components/navbar'
import SideNav from 'components/sideNav'
import { useGetCatFacts } from '../services/api'

const { Content } = Layout

export default function Home() {
    const { loading, data, error } = useGetCatFacts(5)
    if (error) return <div>Failed to load...</div>
    return (
        <>
            <Layout>
                <Navbar />
                <Layout>
                    <SideNav />
                    <Layout>
                        <Content>
                            <List
                                itemLayout='horizontal'
                                dataSource={data && data.data}
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
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </>
    )
}
