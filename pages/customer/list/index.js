import { List } from "antd";
import CustomerListItem from "components/customer-list-item";
import wardrobeListJson from 'constant/json/wardrobe-list'

const CustomerList = () => {
    return (
        <List
            itemLayout='horizontal'
            dataSource={wardrobeListJson.datas}
            renderItem={(item) => (
                <CustomerListItem
                    name={item.name}
                />
            )}
        />
    )
}

export default CustomerList