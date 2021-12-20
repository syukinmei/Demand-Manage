import React, { useState } from 'react';
import { Card, Tag, Table, Radio } from 'antd';
import { Area } from '@ant-design/charts';
import { Chart_config, banker_columns } from './config';
import { data3 } from './config';
console.log(data3);
const AllSides = () => {
  // 涉及庄家通道Tabs选择
  const [showTable, setShowTable] = useState('2');
  const handleModeChange = (e) => {
    setShowTable(e.target.value);
  };
  return (
    <div style={{ marginTop: '30px' }}>
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
      </Card>
    </div>
  );
};

export default React.memo(AllSides);
