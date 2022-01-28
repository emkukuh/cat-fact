import { Layout, Button, Menu } from 'antd'
import style from './index.module.css'

const { Header } = Layout

export default function Navbar() {
    return (
        <Header>
            <div className={style.logo} />
            <Menu theme='dark' mode='horizontal'>
                {new Array(5).fill(null).map((_, index) => {
                    const key = index + 1
                    return <Menu.Item key={key}>{`menu item num ${key}`}</Menu.Item>
                })}
            </Menu>
        </Header >
    )
}
