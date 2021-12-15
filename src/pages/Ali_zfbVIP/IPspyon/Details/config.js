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

export const tempdata1 = [
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
