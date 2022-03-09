import { List } from "antd";
import Layout from "antd/lib/layout/layout";
import WardrobeListItem from "components/wardrobe-list-item";
import { useGetAllWardrobe } from "services/api";

export default function WardrobeList() {
    const { loading, data, error } = useGetAllWardrobe()
    if (error) return <div>Failed to load... {error}</div>
    return (
        <Layout>
            <List
                itemLayout='horizontal'
                dataSource={data && data.data}
                loading={loading}
                renderItem={item => (
                    <WardrobeListItem
                        name={item.name}
                        email={item.ownerEmail}
                        status={item.status}
                        duration={item.duration}
                    />
                )}
            />
        </Layout>
    )
}