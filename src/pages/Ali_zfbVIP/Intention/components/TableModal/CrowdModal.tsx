import React, { useState } from 'react';
import { Modal, Button, Form, Input, Select } from 'antd';

export default function CrowdModal() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    // 打开modal的毁掉
    const showModal = () => {
        setIsModalVisible(true);
    };

    // 点击确认的回调
    const handleOk = () => {
        setIsModalVisible(false);
    };

    // 点击取消的回调
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const [form] = Form.useForm();
    // test
    const onSubmit = async () => {
        const result = await form.validateFields();
        console.log(result);
    }

    // 表单提交
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };
    return (
        <>
            <Button type="link" onClick={showModal}>导出人群</Button>
            <Modal
                title="导出意图人群"
                visible={isModalVisible}
                onOk={onSubmit}
                onCancel={handleCancel}
                maskClosable={false}
                width={900}
            >
                <Form name="ExportCrowd" onFinish={onFinish} form={form} >
                    <Form.Item label="人群名称" name="CrowdName">
                        <Input placeholder="请输入人群名称" />
                    </Form.Item>
                    <Form.Item label="选择的意图">
                        <span>#我是意图名称#</span>
                    </Form.Item>
                    <Form.Item label="人群口径">
                        <Input.Group compact>
                            <span>近7天</span>
                            <Form.Item
                                name='Select'
                            >
                                <Select placeholder="选择“足迹”或“账单”" style={{ width: 180 }}>
                                    <Select.Option value="zuji">足迹</Select.Option>
                                    <Select.Option value="zhangdan">账单</Select.Option>
                                    <Select.Option value="all">足迹或账单</Select.Option>
                                </Select>
                            </Form.Item>
                            <span>PV在</span>
                            <Form.Item
                                name='min'
                            >
                                <Input style={{ maxWidth: 90 }} placeholder="1"></Input>
                            </Form.Item>
                            <span>~</span>
                            <Form.Item
                                name='max'
                            >
                                <Input placeholder="234,482,234"></Input>
                            </Form.Item>
                        </Input.Group>
                    </Form.Item>
                    <Form.Item label="人群有效期">
                        <span>30天</span>
                    </Form.Item>
                </Form>
            </Modal>

        </>
    )
}
