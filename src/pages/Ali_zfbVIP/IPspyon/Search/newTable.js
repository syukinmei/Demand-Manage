import React, { useEffect, useCallback } from 'react';
import { Card, Table, Pagination } from 'antd';
import { connect } from 'umi';

// 你只要想用table  只要调用这个就组件   这一层就是把antd 的table和分页包了一下

const NewTable = (props) => {
  // console.log(props, 'newTable')
  // 这里应该能拿到上面传进来的pager

  // 分页的方法
  const onChangePage = useCallback(
    (page, pageSize) => {
      // console.log({ page, pageSize })
      props.pager?.onPageChange && props.pager?.onPageChange(page);
      pageSize &&
        props.pager?.onPagesizeChange &&
        props.pager?.onPagesizeChange(pageSize);
    },
    [props.pager?.onPageChange, props.pager?.onPagesizeChange],
  );

  return (
    <div>
      {/* antd的table */}
      <Table
        columns={props.Associated_A_columns}
        dataSource={props.relatedGamble}
        rowKey={(record) => record.id}
      />
      <Pagination
        total={props.pager?.count || 0}
        showTotal={(total, range) =>
          `第${range[0]}~${range[1]}条/ 共 ${total} 条`
        }
        pageSize={props.pager?.pagesize || 50}
        showSizeChanger
        current={props.pager?.page}
        pageSizeOptions={['5', '10', '20', '50', '100']}
        onChange={onChangePage}
      />
    </div>
  );
};

export default connect((state) => state.ipSpyon)(React.memo(NewTable));
