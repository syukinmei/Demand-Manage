import React, { useEffect } from 'react';
import { Breadcrumb, Anchor, Input, Space, Row, Col } from 'antd';
import BasicInfo from './basicInfo';
import AllSides from './Allsides';
import GamblerFind from './GamblerFind';
import AssociatedInfo from './AssociatedInfo';
import './index.less';
import { history } from 'umi';

const Details = (props) => {
  // console.log(props.location.query.url)
  // console.log(props.location.state)
  console.log(props.match.params.url);
  // 点击查询事件
  const onSearch = (value) => {
    history.push(`/ali/spyon/details/${value}`);
  };
  return (
    <div
      style={{
        width: '1250px',
      }}
    >
      <Row>
        <Col flex={10}>
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
            <BasicInfo />
            <AllSides />
            <GamblerFind />
            <AssociatedInfo />
          </div>
        </Col>
        <Col flex={2}>
          {/* <div className="anchor-Box"> */}
          <div style={{ background: 'blue', width: '100px' }}>
            <Anchor targetOffset={50}>
              <Anchor.Link href="#BasicInfo" title="基本信息" />
              <Anchor.Link href="#AllSides" title="四方分析" />
              <Anchor.Link href="#GamblerFind" title="赌客发现" />
              <Anchor.Link href="#AssociatedInfo" title="关联信息" />
            </Anchor>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default React.memo(Details);
