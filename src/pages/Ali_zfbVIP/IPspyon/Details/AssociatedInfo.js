import React from 'react';
import { Card, Table } from 'antd';
import { Associated_A_columns, Associated_B_columns } from './config';
import { data7, data8 } from './config';

const AssociatedInfo = () => {
  return (
    <div id="AssociatedInfo">
      <Card title="关联信息" style={{ marginTop: '30px', width: 1100 }}>
        <h3>关联到赌博/欺诈情报</h3>
        <br />
        <Table columns={Associated_A_columns} dataSource={data7} />
        <Table columns={Associated_B_columns} dataSource={data8} />
      </Card>
    </div>
  );
};

export default React.memo(AssociatedInfo);
