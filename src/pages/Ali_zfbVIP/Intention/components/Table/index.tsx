import React, { useContext } from 'react';
import { Table } from 'antd';
import { columns } from './config';
import { IntentionContext } from '../../context';

export default function index() {
    const { reqdata } = useContext(IntentionContext);
    return (
        <div>
            <Table columns={columns} dataSource={reqdata.data} />
        </div>
    )
}
