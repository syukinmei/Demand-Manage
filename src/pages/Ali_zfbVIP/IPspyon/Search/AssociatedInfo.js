import React, { useEffect, useState, useMemo } from 'react';
import { Card, Table } from 'antd';
import { connect } from 'umi';
import NewTable from './newTable';

const Associated_A_columns = [
  {
    title: '赌博网站',
    dataIndex: 'gambleWebsite',
    key: 'gambleWebsite',
  },
  {
    title: '赌博应用',
    dataIndex: 'gambleApplication',
    key: 'gambleApplication',
  },
  {
    title: '最早时间',
    dataIndex: 'earliestTime',
    key: 'earliestTime',
    render: (text) => <>{moment(text).format('YYYY-MM-DD HH:mm:ss')}</>,
    sorter: (a, b) => a.earliestTime - b.earliestTime,
  },
  {
    title: '最近时间',
    dataIndex: 'recentTime',
    key: 'recentTime',
    render: (text) => <>{moment(text).format('YYYY-MM-DD HH:mm:ss')}</>,
    sorter: (a, b) => a.recentTime - b.recentTime,
  },
];

const AssociatedInfo = (props) => {
  const [page, setPage] = useState(1); //页码
  const [pagesize, setPagesize] = useState(5); //每页条数;
  const [showData, setShowData] = useState({ data: [], totalCount: 40 }); //拉取数据的

  // ******************************************************************pager相关
  const handleChangePage = (value) => {
    setPage(value);
  };
  const handleChangeRowsPerPage = (value) => {
    setPagesize(value);
  };
  // useEffect(() => {
  //   setPage(1);
  // }, [pagesize]);

  const pagerObj = useMemo(() => {
    return {
      page,
      pagesize,
      count: showData?.totalCount || 0,
      onPageChange: handleChangePage, //控制页码的方法
      onPagesizeChange: handleChangeRowsPerPage, //每页的个数
    };
  }, [
    page,
    pagesize,
    showData?.totalCount,
    handleChangePage,
    handleChangeRowsPerPage,
  ]);

  //   在调用接口的地方   你们接口应该也是接受page 和pagesize的吧    你把page和pagesize 扔过去  然后依赖一下
  useEffect(() => {
    console.log(page, pagesize);
    props.dispatch({
      type: 'ipSpyon/queryRelatedGamble',
      params: props.currentUrl,
    });

    props.dispatch({
      type: 'ipSpyon/queryRelatedFraud',
      params: props.currentUrl,
    });
  }, [page, pagesize]);

  return (
    <div id="AssociatedInfo">
      <Card title="关联信息" style={{ marginTop: '30px', width: 1100 }}>
        <h3>关联到赌博/欺诈情报</h3>
        <br />
        <NewTable
          pager={pagerObj}
          columns={Associated_A_columns}
          dataSource={props.relatedGamble}
          rowKey={(record) => record.id}
        />
        {/* props.relatedGamble是后端给的数据 */}
      </Card>
    </div>
  );
};

export default connect((state) => state.ipSpyon)(React.memo(AssociatedInfo));
