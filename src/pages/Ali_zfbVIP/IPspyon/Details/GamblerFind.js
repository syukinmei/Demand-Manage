import React from 'react';
import { Card, Table } from 'antd';
import { gambler_find_columns } from './config';
import { data6 } from './config';

const GamblerFind = () => {
  return (
    <div id="GamblerFind">
      <Card title="赌客发现" style={{ marginTop: '30px', width: 1100 }}>
        <Table columns={gambler_find_columns} dataSource={data6} />
      </Card>
    </div>
  );
};

export default React.memo(GamblerFind);
