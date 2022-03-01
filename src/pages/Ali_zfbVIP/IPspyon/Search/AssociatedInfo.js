import React, { useEffect, useState, useMemo } from 'react';
import { Card, Tooltip } from 'antd';
import { connect } from 'umi';
import NewTable from './newTable';

const complaint_details_columns = [
  {
    title: '投诉案件号',
    dataIndex: 'complaintId',
    key: 'complaintId',
    width: 200,
    fixed: true,
  },
  {
    title: '收款方',
    dataIndex: 'opname',
    key: 'opname',
    width: 400,
  },
  {
    title: '涉及金额',
    dataIndex: 'amount',
    key: 'amount',
    width: 150,
  },
  {
    title: '时间',
    dataIndex: 'optime',
    key: 'optime',
    width: 200,
  },
  {
    title: '涉案描述',
    dataIndex: 'describe',
    key: 'describe',
    width: 310,
    // 参考文章：https://blog.csdn.net/Eric_qiushui/article/details/111240128
    onCell: (record, rowIndex) => {
      return {
        style: {
          maxWidth: 310,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          cursor: 'pointer',
        },
      };
    },
    render: (text) => (
      <Tooltip placement="topLeft" title={text}>
        {text}
      </Tooltip>
    ),
  },
];
const moke = [
  {
    key: 1,
    complaintId: '20888227324352100',
    opname: '20888227324352100 杭州xx网络科技有限公司',
    amount: '21300',
    optime: '2019-12-23 14:00:00',
    describe: '在QQ上认识的说可以通过这款名为”蚂蚁金服“的投资软件',
  },
  {
    key: 2,
    complaintId: '20888227324352100',
    opname: '20888227324352100 杭州xx网络科技有限公司',
    amount: '21300',
    optime: '2019-12-23 16:31:20',
    describe:
      '通过淘宝咸鱼发布了几个孩子不用的物品，有人要买，找到我，说是我没有进行咸鱼消费者保障，需要进行绑定，发了二维码说是专用客服，那个客服一下让我交2000，说是证明消费者保障能力，一下说需要进行一步认证交5000假一赔三的能力，说是一分钟返回我账户，结果又说我支付宝没有绑定，需要绑定，又交14000，又说不成功要微信，又要交28000，才发现被骗。骗子发了工号和身份证，身份证看起来像假的。',
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
          columns={complaint_details_columns}
          dataSource={props.relatedGamble || moke}
          // rowKey={(record) => record.id}
          scroll={{ x: '100%' }}
        />
        {/* props.relatedGamble是后端给的数据 */}
      </Card>
    </div>
  );
};

export default connect((state) => state.ipSpyon)(React.memo(AssociatedInfo));
