import React, { useEffect, useState, useImperativeHandle } from 'react';
import { Button, Table, Modal, message } from 'antd';
import { columns } from './config';

const MainTable = React.forwardRef<any, any>(({ form }, ref) => {
  useImperativeHandle(ref, () => ({
    // onSearch
    setPageInfo,
    getList,
  }));

  const [list, setList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [pageInfo, setPageInfo] = useState<any>({
    page: 1,
    pageSize: 10,
    total: 0,
  });

  const success = () => {
    message
      .loading('数据请求中...', 1)
      .then(() => message.success('请求数据完成', 1));
  };

  useEffect(() => {
    console.log('useEffect');
    getList();
  }, [pageInfo.page, pageInfo.pageSize]);

  const getList = async () => {
    setLoading(true);
    try {
      success();
    } catch (error: any) {
      message.error(error.errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <Table
        columns={columns}
        dataSource={list}
        rowKey="id"
        loading={loading}
        pagination={{
          current: pageInfo.page,
          pageSize: pageInfo.pageSize,
          total: pageInfo.total,
          showSizeChanger: true,
          onChange: (page, pageSize) => {
            const info = JSON.parse(JSON.stringify(pageInfo));
            info.page = page;
            info.pageSize = pageSize;
            setPageInfo(info);
          },
          showTotal: (total) => <>总 {total} 条</>,
        }}
      />
      <div>page:{pageInfo.page}</div>
      <div>pageSize:{pageInfo.pageSize}</div>
      <div>total:{pageInfo.total}</div>
      <Button
        onClick={() =>
          setPageInfo({
            page: 1,
            pageSize: 10,
            total: 0,
          })
        }
      >
        设置为1
      </Button>

      <Button
        onClick={() =>
          setPageInfo({
            page: 2,
            pageSize: 10,
            total: 0,
          })
        }
      >
        设置为2
      </Button>
    </div>
  );
});

export default React.memo(MainTable);
