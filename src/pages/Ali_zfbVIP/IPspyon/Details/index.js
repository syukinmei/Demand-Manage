import React from 'react';
import { Breadcrumb, Button, Input, Space } from 'antd';
import BasicInfo from './basicInfo';
const Details = () => {
    // 点击查询事件
    const onSearch = value => {
        console.log(value);
    }
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item>网站/IP</Breadcrumb.Item>
                <Breadcrumb.Item>详情</Breadcrumb.Item>
            </Breadcrumb>
            <Space align="start" size={550}>
                <h1>详情</h1>
                <Input.Search
                    placeholder="请输入URL/IP"
                    allowClear
                    enterButton="查询"
                    size="middle"
                    style={{ width: 400 }}
                    onSearch={onSearch}
                />
            </Space>
            <BasicInfo />
        </div>
    )
}
export default React.memo(Details);