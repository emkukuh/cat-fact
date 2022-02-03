import { Layout } from "antd"
import Navbar from "components/navbar"

import styles from './index.module.css'

const { Content } = Layout

const PageLayout = ({ children }) => {
    return (
        <>
            <Layout>
                <Navbar />
                <Layout>
                    <Layout>
                        <Content className={styles.content}>
                            {children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </>
    )
}

export default PageLayout