import React from 'react';
import {
  Button,
  Breadcrumb,
  Form,
  message,
  Input,
  Space,
  Divider,
  Row,
  Col,
  Empty,
} from 'antd';
import style from './index.less';
const Search = () => {
  const [form] = Form.useForm();
  // 搜索框的方法
  const onFinish = () => {
    console.log(form.getFieldValue('searchValue'));
  };
  // 历史记录查询方法
  const historyQuery = (value) => {
    console.log(value);
  };

  // 页面跳转
  const onSearch = () => {
    // window.open('/ali/spyon/details');
    location.href = '/ali/spyon/details';
  };

  const textData = [
    { url: '127.0.0.1' },
    { url: 'www.daido.com' },
    { url: 'gougoushan' },
    { url: 'sadolfh' },
    { url: '127.0.0.2' },
    { url: '127.0.0.1' },
    { url: 'www.daido.com' },
    { url: 'gougoushan' },
    { url: 'sadolfh' },
    { url: '127.0.0.2' },
  ];
  // const textData = []

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>分析查询</Breadcrumb.Item>
        <Breadcrumb.Item>IP侦查台</Breadcrumb.Item>
      </Breadcrumb>
      <span style={{ fontSize: 20, fontWeight: 'bolder' }}>IP侦查台</span>
      <div className={style.search_Box}>
        <Form
          form={form}
          layout="inline"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item name="searchValue">
            <Input
              placeholder="请输入URL/IP/域名"
              style={{ width: 600, marginLeft: 30 }}
            />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button type="link" onClick={() => form.resetFields()}>
                重置
              </Button>
            </Space>
          </Form.Item>
        </Form>
        <Divider plain>历史记录</Divider>
        {textData.length ? (
          textData.map((item, index) => (
            <Row key={index}>
              <Col span={1} className={style.num}>
                {index + 1}.
              </Col>
              <Col span={21} className={style.value}>
                {item.url}
              </Col>
              <Col span={2}>
                <Button type="link" onClick={() => historyQuery(item.url)}>
                  查询
                </Button>
              </Col>
            </Row>
          ))
        ) : (
          <Empty />
        )}
      </div>
      <Button onClick={onSearch}>跳转</Button>
    </div>
  );
};
export default React.memo(Search);
