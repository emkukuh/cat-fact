import { List } from "antd";
import CustomerListItem from "components/customer-list-item";
import { useGetListWardrobeLocal } from "services/api";

const CustomerList = () => {
    const { loading, data, error } = useGetListWardrobeLocal()
    return (
        <List
            itemLayout='horizontal'
            dataSource={data && data.datas}
            loading={loading}
            renderItem={(item) => (
                <CustomerListItem
                    name={item.name}
                />
            )}
        />
    )
}

export default CustomerList