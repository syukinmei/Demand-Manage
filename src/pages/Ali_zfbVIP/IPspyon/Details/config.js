import { Tag, Modal, Button } from 'antd';
import './index.less';
import React, { useState, useMemo, useEffect } from 'react';
import NewTable from '../Search/newTable';

export const basics_sample_columns = [
  {
    title: '样本哈希',
    dataIndex: 'hash',
    key: 'hash',
  },
  {
    title: '包名',
    dataIndex: 'BundleID',
    key: 'BundleID',
  },
  {
    title: '程序名字',
    dataIndex: 'programName',
    key: 'programName',
  },
];

export const data1 = [
  {
    key: '1',
    hash: 'aaaa',
    BundleID: 'a.b.c',
    programName: '百度搜索',
  },
  {
    key: '2',
    hash: 'bbbb',
    BundleID: 'x.y.z',
    programName: '支付宝',
  },
  {
    key: '3',
    hash: 'cccc',
    BundleID: 'o.p.q',
    programName: '微信',
  },
];

export const cur_analysis_columns = [
  {
    title: 'IP',
    dataIndex: 'ip',
    key: 'ip',
  },
  {
    title: '地理位置',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: '运营商',
    dataIndex: 'operator',
    key: 'operator',
  },
  {
    title: '标签',
    dataIndex: 'tag',
    key: 'tag',
    render: (text) => (
      <>
        {text.map((item, index) => {
          return (
            <Tag key={index} color="success">
              {item}
            </Tag>
          );
        })}
      </>
    ),
  },
];

export const history_analysis_columns = [
  {
    title: '时间',
    dataIndex: 'time',
    key: 'time',
    width: '255px',
  },
  {
    title: 'IP',
    dataIndex: 'ip',
    key: 'ip',
  },
];

export const data2 = [
  {
    key: '1',
    time: '2021-12-16 14:00:00',
    ip: '121.168.10.45',
  },
  {
    key: '2',
    time: '2021-12-16 19:34:29',
    ip: '121.168.65.11',
  },
  {
    key: '3',
    time: '2021-12-18 14:40:55',
    ip: '121.168.10.45',
  },
];

export const ChartData = [
  { year: '09-01', value: 154 },
  { year: '09-02', value: 161 },
  { year: '09-03', value: 159 },
  { year: '09-04', value: 174 },
  { year: '09-05', value: 170 },
  { year: '09-06', value: 310 },
  { year: '09-07', value: 312 },
  { year: '09-08', value: 320 },
  { year: '09-09', value: 332 },
  { year: '09-10', value: 123 },
  { year: '09-11', value: 341 },
  { year: '09-12', value: 322 },
  { year: '09-13', value: 328 },
  { year: '09-14', value: 322 },
  { year: '09-15', value: 300 },
  { year: '09-16', value: 289 },
  { year: '09-17', value: 387 },
  { year: '09-18', value: 243 },
  { year: '09-19', value: 344 },
  { year: '09-20', value: 255 },
  { year: '09-21', value: 219 },
  { year: '09-22', value: 190 },
  { year: '09-23', value: 199 },
  { year: '09-24', value: 210 },
  { year: '09-25', value: 233 },
  { year: '09-26', value: 244 },
  { year: '09-27', value: 295 },
  { year: '09-28', value: 312 },
  { year: '09-29', value: 246 },
  { year: '09-30', value: 277 },
  { year: '09-31', value: 332 },
];

export const Chart_config = {
  smooth: true,
  data: ChartData,
  xField: 'year',
  yField: 'value',
  // yAxis: {
  //     range: [0, 1],
  //     alias: '资金量',
  // },
  tooltip: {
    formatter: (v) => {
      return { name: '资金量', value: v.value + '万元' };
    },
  },
};

export const banker_columns = [
  {
    title: '收款账户',
    dataIndex: 'account',
    key: 'account',
  },
  {
    title: '账户号',
    dataIndex: 'accountID',
    key: 'accountID',
  },
  {
    title: '用户名',
    dataIndex: 'accountName',
    key: 'accountName',
  },
  {
    title: '最早时间',
    dataIndex: 'firstTime',
    key: 'firstTime',
  },
  {
    title: '最近时间',
    dataIndex: 'lastTime',
    key: 'lastTime',
  },
  {
    title: '笔数',
    dataIndex: 'count',
    key: 'count',
    sorter: (a, b) => a.count - b.count,
  },
  {
    title: '金额',
    dataIndex: 'amount',
    key: 'amount',
    sorter: (a, b) => a.amount - b.amount,
  },
  {
    title: '金额比例',
    dataIndex: 'ratio',
    key: 'ratio',
    sorter: (a, b) => a.ratio - b.ratio,
  },
  {
    title: '数据源',
    dataIndex: 'source',
    key: 'source',
  },
];

export const data3 = [
  {
    key: 1,
    account: '个人',
    accountID: '6227001290100987689',
    accountName: '张三',
    firstTime: '2021-12-17 14:00:00',
    lastTime: '2021-12-20 11:56:33',
    count: '6',
    amount: '6000.00',
    ratio: '25%',
    source: '数据源1',
  },
  {
    key: 2,
    account: '商户',
    accountID: '6227001290100987689',
    accountName: '李四',
    firstTime: '2021-12-17 14:00:00',
    lastTime: '2021-12-20 11:56:33',
    count: '3',
    amount: '3000.00',
    ratio: '24%',
    source: '数据源2',
  },
  {
    key: 3,
    account: '银行卡',
    accountID: '6227001290100987689',
    accountName: '王五',
    firstTime: '2021-12-17 14:00:00',
    lastTime: '2021-12-20 11:56:33',
    count: '45',
    amount: '1500.00',
    ratio: '12%',
    source: '数据源3',
  },
  {
    key: 4,
    account: '商户',
    accountID: '6227001290100987689',
    accountName: '张三',
    firstTime: '2021-12-17 14:00:00',
    lastTime: '2021-12-20 11:56:33',
    count: '3',
    amount: '8900.00',
    ratio: '25%',
    source: '数据源1',
  },
  {
    key: 5,
    account: '银行卡',
    accountID: '6227001290100987689',
    accountName: '张三',
    firstTime: '2021-12-17 14:00:00',
    lastTime: '2021-12-20 11:56:33',
    count: '2',
    amount: '700.00',
    ratio: '45%',
    source: '数据源1',
  },
];

export const test_columns = (props) => {
  console.log(props, 'config里的props');
  return [
    {
      title: 'User_ID',
      dataIndex: 'userId',
      key: 'userId',
      width: 190,
      fixed: true,
    },
    {
      title: '名字',
      dataIndex: 'name',
      key: 'name',
      width: 80,
    },
    {
      title: '特征',
      dataIndex: 'feature',
      key: 'feature',
      width: 100,
    },
    {
      title: '总金额',
      dataIndex: 'amount',
      key: 'amount',
      width: 100,
      sorter: (a, b) => a.amount - b.amount,
    },
    {
      title: '身份证号码',
      dataIndex: 'IDcard',
      key: 'IDcard',
      width: 190,
    },
    {
      title: '交易次数',
      dataIndex: 'count',
      key: 'count',
      width: 100,
      sorter: (a, b) => a.count - b.count,
      render: (text) => {
        const showModal = () => {
          setIsModalVisible(true);
        };
        const [isModalVisible, setIsModalVisible] = useState(false);

        const handleOk = () => {
          setIsModalVisible(false);
        };

        const handleCancel = () => {
          setIsModalVisible(false);
        };

        const [page, setPage] = useState(1); //页码
        const [pagesize, setPagesize] = useState(5); //每页条数;
        const [showData, setShowData] = useState({ data: [], totalCount: 40 }); //拉取数据的

        const handleChangePage = (value) => {
          setPage(value);
        };
        const handleChangeRowsPerPage = (value) => {
          setPagesize(value);
        };

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

        useEffect(() => {
          console.log(page, pagesize);
          // props.dispatch({
          //   type: 'ipSpyon/queryRelatedGamble',
          //   params: props.currentUrl,
          // });

          // props.dispatch({
          //   type: 'ipSpyon/queryRelatedFraud',
          //   params: props.currentUrl,
          // });
        }, [page, pagesize]);
        return (
          <>
            <Button onClick={showModal} type="link">
              {text}
            </Button>
            <Modal
              title="交易次数详情"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <NewTable
                pager={pagerObj}
                columns={text_transaction_columns}
                // dataSource={props.relatedGamble}
                dataSource={[
                  {
                    D: 'a',
                    A: 'a',
                    B: 'b',
                    C: 'c',
                    E: 'e',
                  },
                ]}
                rowKey={(record) => record.id}
              />
            </Modal>
          </>
        );
      },
    },
    {
      title: '最早支付时间',
      dataIndex: 'firstTime',
      key: 'firstTime',
      width: 190,
    },
    {
      title: '最晚支付时间',
      dataIndex: 'lastTime',
      key: 'lastTime',
      width: 190,
    },
    {
      title: '落地位置',
      dataIndex: 'position',
      key: 'position',
      width: 190,
    },
    {
      title: '是否有风险',
      dataIndex: 'risk',
      key: 'risk',
      width: 120,
      align: 'center',
      render: (text) =>
        text ? (
          <Button onClick={countDown} type="link">
            是
          </Button>
        ) : (
          <div>否</div>
        ),
    },
  ];
};
const text_transaction_columns = [
  {
    title: 'User_ID',
    dataIndex: 'A',
    key: 'A',
  },
  {
    title: '姓名',
    dataIndex: 'B',
    key: 'B',
  },
  {
    title: '总金额',
    dataIndex: 'C',
    key: 'C',
  },
  {
    title: '最早支付时间',
    dataIndex: 'D',
    key: 'D',
  },
  {
    title: '落地位置',
    dataIndex: 'E',
    key: 'E',
  },
];
// 是否有风险标签的modal
function countDown() {
  const modal = Modal.confirm({
    title: '风险详情',
    width: 700,
    closable: true,
    content: (
      <div className="riskModal">
        <div className="riskModal-title">高危行为：</div>
        <div className="riskModal-info">
          <Tag color="error">通过监听(被监听短信利用)</Tag>
          <Tag color="error">设备管理(高风险木马)</Tag>
          <Tag color="error">辅助助手(自动点击)</Tag>
          <Tag color="error">系统悬浮窗(明雷等内容覆盖场景)</Tag>
          <Tag color="error">通讯录读取</Tag>
        </div>
      </div>
    ),
  });
}
// 疑似支付通道测试账号下的交易次数modal
// function tradesModal() {
//   const modal = Modal.confirm({

//   })
// }

export const data4 = [
  {
    key: 1,
    userId: '20888227324352100',
    name: '张三',
    feature: '特征名称1',
    amount: '9000.00',
    IDcard: '330302199208190902',
    count: 15,
    firstTime: '2021-12-17 14:00:00',
    lastTime: '2021-12-20 11:56:33',
    position: '浙江省杭州市西湖区',
    risk: 1,
  },
  {
    key: 2,
    userId: '20888227324352100',
    name: '李四',
    feature: '特征名称1',
    amount: '20000.00',
    IDcard: '330302199208190902',
    count: 204,
    firstTime: '2021-12-17 14:00:00',
    lastTime: '2021-12-20 11:56:33',
    position: '浙江省杭州市拱墅区',
    risk: 0,
  },
];

export const complaint_columns = [
  {
    title: '身份证',
    dataIndex: 'IDcard',
    key: 'IDcard',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '手机号',
    dataIndex: 'MobileON',
    key: 'MobileON',
  },
  {
    title: '投诉次数',
    dataIndex: 'count',
    key: 'count',
    sorter: (a, b) => a.count - b.count,
    render: (text) => <Button type="link">{text}</Button>,
  },
  {
    title: '涉及金额',
    dataIndex: 'amount',
    key: 'amount',
    sorter: (a, b) => parseFloat(a.amount) - parseFloat(b.amount),
  },
  {
    title: '用户常驻地',
    dataIndex: 'address',
    key: 'address',
  },
];

export const data5 = [
  {
    key: 1,
    IDcard: '330302199208190902',
    name: '张三',
    MobileON: '18906092099',
    count: 15,
    amount: '9000.00',
    address: '浙江省杭州市西湖区',
  },
  {
    key: 2,
    IDcard: '330302199208190902',
    name: '李四',
    MobileON: '18906092099',
    count: 204,
    amount: '2000.00',
    address: '浙江省杭州市拱墅区',
  },
  {
    key: 3,
    IDcard: '330302199208190902',
    name: '王五',
    MobileON: '18906092099',
    count: 1022,
    amount: '40000.00',
    address: '浙江省杭州市西湖区',
  },
  {
    key: 4,
    IDcard: '330302199208190902',
    name: '老六',
    MobileON: '18906092099',
    count: 36,
    amount: '40000.00',
    address: '浙江省杭州市滨江区',
  },
  {
    key: 5,
    IDcard: '330302199208190902',
    name: '头七',
    MobileON: '18906092099',
    count: 4,
    amount: '190500.00',
    address: '浙江省杭州市余杭区',
  },
];

export const gambler_find_columns = [
  {
    title: 'User_ID',
    dataIndex: 'userId',
    key: 'userId',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '身份证号码',
    dataIndex: 'IDcard',
    key: 'IDcard',
  },
  {
    title: '最早时间',
    dataIndex: 'firstTime',
    key: 'firstTime',
  },
  {
    title: '最近时间',
    dataIndex: 'lastTime',
    key: 'lastTime',
  },
  {
    title: '次数',
    dataIndex: 'count',
    key: 'count',
    sorter: (a, b) => a.count - b.count,
  },
  {
    title: '落地位置',
    dataIndex: 'position',
    key: 'position',
  },
  {
    title: '是否代理',
    dataIndex: 'agency',
    key: 'agency',
    render: (text) => (text ? '是' : '否'),
  },
];

export const data6 = [
  {
    key: 1,
    userId: '20888227324352100',
    name: '张三',
    IDcard: '330302199208190202',
    firstTime: '2021-12-17 14:00:00',
    lastTime: '2021-12-20 11:56:33',
    count: 15,
    position: '浙江省杭州市西湖区',
    agency: 1,
  },
  {
    key: 2,
    userId: '20888227324352100',
    name: '李四',
    IDcard: '330302199208190202',
    firstTime: '2021-12-17 14:00:00',
    lastTime: '2021-12-20 11:56:33',
    count: 204,
    position: '浙江省杭州市滨江区',
    agency: 0,
  },
];

export const Associated_A_columns = [
  {
    title: '赌博网站',
    dataIndex: 'gambleId',
    key: 'gambleId',
  },
  {
    title: '赌博应用',
    dataIndex: 'gambleApp',
    key: 'gambleApp',
  },
  {
    title: '最早时间',
    dataIndex: 'firstTime',
    key: 'firstTime',
  },
  {
    title: '最近时间',
    dataIndex: 'lastTime',
    key: 'lastTime',
  },
];

export const Associated_B_columns = [
  {
    title: '诈骗网站',
    dataIndex: 'gambleApp',
    key: 'gambleApp',
  },
  {
    title: '最早时间',
    dataIndex: 'firstTime',
    key: 'firstTime',
  },
  {
    title: '最近时间',
    dataIndex: 'lastTime',
    key: 'lastTime',
  },
];

export const data7 = [
  {
    key: 1,
    gambleId: '20888227324352100',
    gambleApp: '澳门金沙',
    firstTime: '2021-12-17 14:00:00',
    lastTime: '2021-12-20 11:56:33',
  },
  {
    key: 2,
    gambleId: '20888227324352100',
    gambleApp: '威尼斯人',
    firstTime: '2021-12-17 14:00:00',
    lastTime: '2021-12-20 11:56:33',
  },
  {
    key: 3,
    gambleId: '20888227324352100',
    gambleApp: '澳门金水岸',
    firstTime: '2021-12-17 14:00:00',
    lastTime: '2021-12-20 11:56:33',
  },
];

export const data8 = [
  {
    key: 1,
    gambleApp: '天天兼职',
    firstTime: '2021-12-17 14:00:00',
    lastTime: '2021-12-20 11:56:33',
  },
  {
    key: 2,
    gambleApp: '妙赢钱',
    firstTime: '2021-12-17 14:00:00',
    lastTime: '2021-12-20 11:56:33',
  },
  {
    key: 3,
    gambleApp: '财富兼职',
    firstTime: '2021-12-17 14:00:00',
    lastTime: '2021-12-20 11:56:33',
  },
];
