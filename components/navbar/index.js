import Link from "next/link";
import { Layout, Menu } from 'antd'
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import Directory from "constant/directory";
import styles from './index.module.css'

const { Header } = Layout
const { SubMenu } = Menu
var defaultSelected = null

const setDefaultSelectedKey = (key) => {
    defaultSelected = key
}

export default function Navbar() {
    return (
        <Layout className={styles.container} >
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={defaultSelected}>
                    <Menu.Item key="home" icon={<HomeOutlined />}>
                        <Link href={Directory.homeDir}>
                            <a onClick={setDefaultSelectedKey('home')}>Home</a>
                        </Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="Wardrobe">
                        <Menu.Item key="s11">
                            <Link href={Directory.wardrobeAdd}>
                                <a onClick={setDefaultSelectedKey('s11')}>Tambah Pakaian</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="s12">
                            <Link href={Directory.wardrobeListDir}>
                                <a onClick={setDefaultSelectedKey('s12')}>List Pakaian</a>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<UserOutlined />} title="Customer">
                        <Menu.Item key="s21">
                            <Link href={Directory.customerListDir}>List Customer</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<UserOutlined />} title="Transaksi">
                        <Menu.Item key="s31">Tambah Transaksi</Menu.Item>
                        <Menu.Item key="s32">List Transaksi</Menu.Item>
                    </SubMenu>
                </Menu>
            </Header>
        </Layout>
    )
}
