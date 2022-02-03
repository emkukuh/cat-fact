import { List } from "antd"
import styles from './index.module.css'

const CustomerListItem = ({ name }) => {
    return (
        <List.Item className={styles.container} onClick={() => { console.log("name") }}>
            <div className={styles.image} />
            <List.Item.Meta
                className={styles.itemMeta}
                title={name}
            />
        </List.Item>
    )
}

export default CustomerListItem