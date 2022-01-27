import 'antd/dist/antd.css'
import { PageHeader, Button } from 'antd'
import { SmileOutlined } from '@ant-design/icons'


export default function Navbar() {
    return (
        <div>
            <PageHeader
                ghost={false}
                title="List Fakta Kucing"
                extra={[
                    <Button type='primary' shape='round'><SmileOutlined /> Koceng</Button>
                ]}
            />
        </div>
    )
}
