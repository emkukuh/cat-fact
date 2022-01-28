import { Layout, Menu } from "antd"
import { UserOutlined } from '@ant-design/icons';

import style from './index.module.css'

const { Sider } = Layout
const { SubMenu } = Menu

const SideNav = () => {
    return (
        <Sider width={200} className={style.maxHeightMenu}>
            <Menu theme="dark" mode="inline">
                <SubMenu key="sub1" icon={<UserOutlined />} title="Menu Pakaian">
                    <Menu.Item key="1">Tambah Pakaian</Menu.Item>
                    <Menu.Item key="2">List Pakaian</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<UserOutlined />} title="Customer">
                    <Menu.Item key="1">List Customer</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<UserOutlined />} title="Transaksi">
                    <Menu.Item key="1">Tambah Transaksi</Menu.Item>
                    <Menu.Item key="1">List Transaksi</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    )
}

export default SideNav