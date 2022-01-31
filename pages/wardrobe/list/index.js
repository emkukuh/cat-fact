import { List } from "antd";
import WardrobeListItem from "components/wardrobe-list-item";
import { useGetListWardrobeLocal } from "services/api";

const WardrobeList = () => {
    const { loading, data, error } = useGetListWardrobeLocal()
    return (
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
    )
}

export default WardrobeList