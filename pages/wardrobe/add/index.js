import { Form, Input, Select } from 'antd'
import ImagePicker from 'components/image-picker/image-picker'
import styles from './index.module.css'

const { Option } = Select

const Add = () => {
    const onSuccess = (values) => {
        console.log('success: ', values)
    }
    const onFailed = (error) => {
        console.log('error: ', error)
    }
    const layout = {
        labelCol: {
            xs: { span: 2 },
            sm: { span: 3 }
        }
    }
    return (
        <Form
            {...layout}
            className={styles.container}
            name='basic'
            onFinish={onSuccess}
            onFinishFailed={onFailed}
            autoComplete='off'
        >
            <Form.Item
                required
                label="Product Name"
                name="Product Name"
                rules={[{ required: true }]}
            >
                {renderInputType('input')}
            </Form.Item>
            <Form.Item
                required
                label="Owner Email"
                name="Owner Email"
                rules={[{ required: true, type: 'email' }]}
            >
                {renderInputType('input')}
            </Form.Item>
            <Form.Item
                required
                label="Label Size"
                name="Label Size"
                rules={[{ required: true }]}
            >
                <Select
                    placeholder="Select Label Size"
                    allowClear
                >
                    <Option value="xs">XS</Option>
                    <Option value="s">S</Option>
                    <Option value="m">M</Option>
                    <Option value="l">L</Option>
                    <Option value="xl">XL</Option>
                    <Option value="xxl">XXL</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Size Detail"
            >
                <Form.Item
                    required
                    name={['Size Detail', 'p']}
                    rules={[{ required: true }]}
                >
                    {renderInputType('input')}
                </Form.Item>
                <Form.Item
                    required
                    name={['Size Detail', 'l']}
                    rules={[{ required: true }]}
                >
                    {renderInputType('input')}
                </Form.Item>
                <Form.Item
                    required
                    name={['Size Detail', 't']}
                    rules={[{ required: true }]}
                >
                    {renderInputType('input')}
                </Form.Item>
                <Form.Item
                    required
                    name={['Size Detail', 'o']}
                    rules={[{ required: true }]}
                >
                    {renderInputType('input')}
                </Form.Item>
            </Form.Item>
            <Form.Item
                required
                label="Defects"
                name="Defects"
                rules={[{ required: true }]}
            >
                {renderInputType('textArea')}
            </Form.Item>
            <Form.Item
                required
                label="images"
            >
                <ImagePicker />
            </Form.Item>
        </Form >
    )
}

const renderInputType = (type, className) => {
    if (type === 'input') return <Input className={className} />
    if (type === 'textArea') return <Input.TextArea rows={4} className={className} />
    return <p>Input tidak tersedia</p>
}

export default Add