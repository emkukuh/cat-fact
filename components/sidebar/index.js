import Link from "next/link";
import { Layout, Menu } from "antd"
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import Directory from "constant/directory";

import style from './index.module.css'

const { Sider } = Layout
const { SubMenu } = Menu

var defaultSelected = null

const setDefaultSelectedKey = (key) => {
    defaultSelected = key
}

const Sidebar = () => {
    return (
        <Sider width={200} className={style.maxHeightMenu}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={defaultSelected}>
                <Menu.Item key="home" icon={<HomeOutlined />}>
                    <Link href={Directory.homeDir}>
                        <a onClick={setDefaultSelectedKey('home')}>Home</a>
                    </Link></Menu.Item>
                <SubMenu key="sub1" icon={<UserOutlined />} title="Menu Pakaian">
                    <Menu.Item key="s11">Tambah Pakaian</Menu.Item>
                    <Menu.Item key="s12">
                        <Link href={Directory.wardrobeListDir}>
                            <a onClick={setDefaultSelectedKey('s12')}>List Pakaian</a>
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<UserOutlined />} title="Customer">
                    <Menu.Item key="s21">List Customer</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<UserOutlined />} title="Transaksi">
                    <Menu.Item key="s31">Tambah Transaksi</Menu.Item>
                    <Menu.Item key="s32">List Transaksi</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    )
}

export default Sidebar