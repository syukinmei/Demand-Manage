import React from 'react';
import { Breadcrumb, Anchor, Input, Space } from 'antd';
import BasicInfo from './basicInfo';
import AllSides from './Allsides';
import GamblerFind from './GamblerFind';
import AssociatedInfo from './AssociatedInfo';
import './index.less';

const Details = () => {
  // 点击查询事件
  const onSearch = (value) => {
    console.log(value);
  };
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>网站/IP</Breadcrumb.Item>
        <Breadcrumb.Item>详情</Breadcrumb.Item>
      </Breadcrumb>
      <Space align="start" size={650}>
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
      <div className="anchor-Box">
        <Anchor targetOffset={50}>
          <Anchor.Link href="#BasicInfo" title="基本信息" />
          <Anchor.Link href="#AllSides" title="四方分析" />
          <Anchor.Link href="#GamblerFind" title="赌客发现" />
          <Anchor.Link href="#AssociatedInfo" title="关联信息" />
        </Anchor>
      </div>
      <BasicInfo />
      <AllSides />
      <GamblerFind />
      <AssociatedInfo />
    </div>
  );
};
export default React.memo(Details);
