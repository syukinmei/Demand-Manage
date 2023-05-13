import React from 'react';
import { Button, Tag } from 'antd';

export const columns = [
  {
    title: '账号Code',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: '账号名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '关联运力',
    dataIndex: 'innerExpressCode',
    key: 'innerExpressCode',
  },
  {
    title: '运力范围',
    dataIndex: 'scope',
    key: 'scope',
    render: () => '全国',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
    width: 180,
    // render: (time: number) => TimeUtil.formatTime(time, 'YYYY-MM-DD HH:mm')
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    width: 100,
    render: (status: number) =>
      status ? (
        <Tag color="success">使用中</Tag>
      ) : (
        <Tag color="default">已停用</Tag>
      ),
  },
  {
    title: '操作',
    dataIndex: 'actions',
    key: 'actions',
    render: (_: any, record: any) => (
      <>
        <Button type="link">编辑</Button>

        <Button type="link">{record.status ? '停用' : '启用'}</Button>
      </>
    ),
  },
];
