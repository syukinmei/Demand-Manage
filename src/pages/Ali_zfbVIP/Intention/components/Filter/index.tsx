import React from 'react';
import { Row, Col, Form, Input, Button, Select } from 'antd';
const { Option } = Select;
export default function Filter() {
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const onGenderChange = (value: string) => {
        console.log(value);
    };
    return (
        <>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                form={form}
            >
                <Row>
                    <Col span={6}>
                        <Form.Item label="一级意图" name="username">
                            <Select
                                placeholder="请选择"
                                onChange={onGenderChange}
                                allowClear
                                mode="multiple"
                                filterOption={false}
                            >
                                <Option value="male">male</Option>
                                <Option value="female">female</Option>
                                <Option value="other">other</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="二级意图" name="username">
                            <Select placeholder="请选择" onChange={onGenderChange} allowClear>
                                <Option value="male">male</Option>
                                <Option value="female">female</Option>
                                <Option value="other">other</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="三级意图" name="username">
                            <Select placeholder="请选择" onChange={onGenderChange} allowClear>
                                <Option value="male">male</Option>
                                <Option value="female">female</Option>
                                <Option value="other">other</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="四级意图" name="username">
                            <Select placeholder="请选择" onChange={onGenderChange} allowClear>
                                <Option value="male">male</Option>
                                <Option value="female">female</Option>
                                <Option value="other">other</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <Form.Item label="五级意图" name="username">
                            <Select placeholder="请选择" onChange={onGenderChange} allowClear>
                                <Option value="male">male</Option>
                                <Option value="female">female</Option>
                                <Option value="other">other</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="标签" name="tagCode ">
                            <Input placeholder="请选择" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="人群选择" style={{ marginBottom: 0 }}>
                            <Form.Item
                                name="year"
                                style={{ display: 'inline-block', width: '35%', margin: '0 8px' }}
                            >
                                <Input placeholder="0" />
                            </Form.Item>
                            <span style={{ marginLeft: 4 }}>~</span>
                            <Form.Item
                                name="month"
                                style={{ display: 'inline-block', width: '35%', margin: '0 8px' }}
                            >
                                <Input />
                            </Form.Item>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit" style={{ marginRight: 10 }}>
                                搜索
                            </Button>
                            <Button
                                htmlType="button"
                                onClick={() => {
                                    form.resetFields();
                                }}
                            >
                                重置
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    );
}