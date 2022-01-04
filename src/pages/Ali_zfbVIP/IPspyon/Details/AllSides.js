import React, { useState } from 'react';
import {
  Card,
  Tag,
  Table,
  Radio,
  Statistic,
  Form,
  Input,
  Select,
  Space,
  Button,
} from 'antd';
import { Area } from '@ant-design/charts';
import {
  Chart_config,
  banker_columns,
  test_columns,
  complaint_columns,
} from './config';
import { data3, data4, data5 } from './config';
const constTime = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
const AllSides = () => {
  const [form] = Form.useForm();
  // 搜索框的方法
  const onFinish = () => {
    console.log('搜索', form.getFieldsValue());
    console.log(form.getFieldValue('complainant'));
  };
  // 涉及庄家通道Tabs选择
  const [showTable, setShowTable] = useState('2');
  const handleModeChange = (e) => {
    console.log(e.target.value);
    setShowTable(e.target.value);
  };
  return (
    <div id="AllSides" style={{ marginTop: '30px', width: 1100 }}>
      <Card title="四方分析">
        <Tag color="blue">四方网站</Tag>
        <br />
        <br />
        <h3>支付趋势</h3>
        <Area {...Chart_config} />
        <br />
        <br />
        <h3>涉及庄家通道</h3>
        <Radio.Group
          value={showTable}
          onChange={handleModeChange}
          style={{ marginBottom: 20 }}
        >
          <Radio.Button value="1">海关</Radio.Button>
          <Radio.Button value="2">预测</Radio.Button>
        </Radio.Group>
        <Table columns={banker_columns} dataSource={data3} />
        <h3>疑似支付通道测试账号</h3>
        <Table
          columns={test_columns('props')}
          dataSource={data4}
          scroll={{ x: '100%' }}
        />
        <h3>涉及投诉情况</h3>
        <div className="StatisticBox">
          <div>
            <Statistic title="总案件量" value={99999} />
          </div>
          <div>
            <Statistic title="总受害人数量" value={'13000'} />
          </div>
          <div>
            <Statistic title="总金额" value={90088800} suffix="元" />
          </div>
          <div>
            <Statistic
              title="最早案发时间"
              value={constTime}
              formatter={(value) => value + '格式化'}
            />
          </div>
          <div>
            <Statistic title="最近案发时间" value={'2021-08-23 19:23:00'} />
          </div>
        </div>
        <h1>搜索功能</h1>
        <Form
          form={form}
          layout="inline"
          onFinish={onFinish}
          autoComplete="off" // ？
        >
          <Form.Item label="投诉人">
            <Input.Group compact>
              <Form.Item
                name={['complainant', 'type']}
                noStyle
                rules={[{ required: true, message: 'Province is required' }]}
              >
                <Select placeholder="Select province">
                  <Select.Option value="Name">姓名</Select.Option>
                  <Select.Option value="ID_card">省份证</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name={['complainant', 'value']}
                noStyle
                rules={[{ required: true, message: 'Street is required' }]}
              >
                <Input style={{ width: '50%' }} placeholder="Input street" />
              </Form.Item>
            </Input.Group>
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
        <Table columns={complaint_columns} dataSource={data5} />
      </Card>
    </div>
  );
};

export default React.memo(AllSides);
