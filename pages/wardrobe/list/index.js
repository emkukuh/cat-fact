import { List } from "antd";
import WardrobeListItem from "components/wardrobe-list-item";
import wardrobeListJson from 'constant/json/wardrobe-list'

const WardrobeList = () => {
    const datas = wardrobeListJson.datas
    return (
        <List
            itemLayout='horizontal'
            dataSource={datas}
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