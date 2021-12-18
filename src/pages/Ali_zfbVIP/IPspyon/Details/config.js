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
                {
                    text.map((item, index) => {
                        return <Tag key={index} color="success">{item}</Tag>
                    })
                }
            </>
        )
    }
];

export const history_analysis_columns = [
    {
        title: '时间',
        dataIndex: 'time',
        key: 'time',
        width: '255px'
    },
    {
        title: 'IP',
        dataIndex: 'ip',
        key: 'ip',
    }
]

export const data2 = [
    {
        key: '1',
        time: '2021-12-16 14:00:00',
        ip: '121.168.10.45'
    },
    {
        key: '2',
        time: '2021-12-16 19:34:29',
        ip: '121.168.65.11'
    },
    {
        key: '3',
        time: '2021-12-18 14:40:55',
        ip: '121.168.10.45'
    }
];