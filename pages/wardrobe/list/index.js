import { List } from "antd";
import PageLayout from "components/page-layout";
import WardrobeListItem from "components/wardrobe-list-item";
import { useGetListWardrobeLocal } from "services/api";

const WardrobeList = () => {
    const { loading, data, error } = useGetListWardrobeLocal()
    return (
        <PageLayout>
            <List
                itemLayout='horizontal'
                dataSource={data && data.datas}
                loading={loading}
                renderItem={(item) => (
                    <WardrobeListItem
                        name={item.name}
                        email={item.ownerEmail}
                        status={item.status}
                        duration={item.duration}
                    />
                )}
            />
        </PageLayout>
    )
}

export default WardrobeList