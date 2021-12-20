import { Table, Tag, Space } from 'antd';

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
  },
  {
    title: '金额',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: '金额比例',
    dataIndex: 'ratio',
    key: 'ratio',
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
];
