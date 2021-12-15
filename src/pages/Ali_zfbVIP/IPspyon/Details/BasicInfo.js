import React from 'react';
import { Card, Tag, Descriptions, Tabs, Table } from 'antd';
import { basics_sample_columns, tempdata1 } from './config';
console.log(basics_sample_columns)
const BasiceInfo = () => {
    const TabsCallback = (key) => {
        console.log(key)
    }
    return (
        <Card title='基本信息' style={{ width: 990 }}>
            <Descriptions title={<Tag color="blue">来自网络</Tag>}>
                <Descriptions.Item label='相关URL'>http://www.yuque.net</Descriptions.Item>
                <Descriptions.Item label='子域名'>http://www.yuque.net</Descriptions.Item>
                <Descriptions.Item label='域名服务商'>厦门易名科技股份有限公司</Descriptions.Item>
                <Descriptions.Item label='网页标题'>小数支付-轻松支付</Descriptions.Item>
                <Descriptions.Item label='解析IP'>WERIOUEW239</Descriptions.Item>
                <Descriptions.Item label='通信样本'>代码包</Descriptions.Item>
                <Descriptions.Item label='注册邮箱'>aaabbb@xxx.com</Descriptions.Item>
                <Descriptions.Item label='注册时间'>2021-12-15 14:24:32</Descriptions.Item>
                <Descriptions.Item label='过期时间'>2021-12-28 16:56:32</Descriptions.Item>
            </Descriptions>
            <Tabs defaultActiveKey='3' onChange={TabsCallback}>
                <Tabs.TabPane tab='域名解析' key='1'>
                    <h1>1</h1>
                </Tabs.TabPane>
                <Tabs.TabPane tab='whois信息' key='2'>
                    {whois()}
                </Tabs.TabPane>
                <Tabs.TabPane tab='相关样本' key='3'>
                    <Table columns={basics_sample_columns} dataSource={tempdata1} />
                </Tabs.TabPane>
            </Tabs>
        </Card>
    )
}

const whois = () => {
    return (
        <Descriptions>
            <Descriptions.Item label='注册者'>张三</Descriptions.Item>
            <Descriptions.Item label='注册时间'>2021-12-15 14:24:32</Descriptions.Item>
            <Descriptions.Item label='注册机构'>-</Descriptions.Item>
            <Descriptions.Item label='过期时间'>2022-11-29 18:01:32</Descriptions.Item>
            <Descriptions.Item label='邮箱'>abc@xyz.com</Descriptions.Item>
            <Descriptions.Item label='更新时间'>2022-12-15 16:02:18</Descriptions.Item>
            <Descriptions.Item label='地址'>杭州西湖</Descriptions.Item>
            <Descriptions.Item label='域名服务商' span={2}>Alibaba Cloud Computing(Beijing)Co.,Ltd.</Descriptions.Item>
            <Descriptions.Item label='电话'>13933993399</Descriptions.Item>
            <Descriptions.Item label='域名服务器'>DNS21.HICHINA.COM; DNS22.HICHINA.COM</Descriptions.Item>
        </Descriptions>
    )
}
const DN_analysis = () => {
    
}

export default React.memo(BasiceInfo);