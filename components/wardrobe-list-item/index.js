import { Tag, List } from 'antd'
import styles from './index.module.css'

const tagColor = status => {
    if (status === 'terpinjam') return '#2db7f5'
    if (status === 'tersedia') return '#87d068'
    if (status === 'laundry') return 'red'
    return 'cyan'
}

const WardrobeListItem = ({ name, email, status, duration }) => {
    return (
        <List.Item className={styles.container} onClick={() => { console.log(name) }}>
            <div className={styles.image} />
            <List.Item.Meta
                className={styles.itemMeta}
                title={name}
                description={email}
            />
            <Tag color={tagColor(status)} className={styles.tag}>{`${status} (${duration} hari)`}</Tag>
        </List.Item>
    )
}

export default WardrobeListItem