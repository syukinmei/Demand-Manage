import { Tag, Space, Button, Popover } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { format_number } from '../../context';
import CrowdModal from '../TableModal/CrowdModal';
import ServeModal from '../TableModal/ServeModal';
import HooksModal from '../TableModal/HooksModal';

const moreAction = (
    <div>
        <Button type="link">打标</Button><br />
        <Button type="link">下线</Button>
    </div>
)
export const columns = [
    {
        title: '一级意图_人群数量',
        dataIndex: 'intentLevel_1',
        key: 'intentLevel_1',
        render: (text: any, record: any) => {
            if (text) {
                let color = '';
                switch (text.tags[0]) {
                    case '最新':
                        color = 'green';
                        break;
                    case '精选':
                        color = 'purple';
                        break;
                    default:
                }
                return (
                    <>
                        <div>
                            {text.intentName}&nbsp;
                            {text.tags.length ? <Tag color={color}>{text.tags[0]}</Tag> : null}
                        </div>
                        {format_number(text.statisticsInfo.coverCnt)}
                    </>
                )
            }
        }
    },
    {
        title: '二级意图_人群数量',
        dataIndex: 'intentLevel_2',
        key: 'intentLevel_2',
        render: (text: any, record: any) => {
            if (text) {
                let color = '';
                switch (text.tags[0]) {
                    case '最新':
                        color = 'green';
                        break;
                    case '精选':
                        color = 'purple';
                        break;
                    default:
                }
                return (
                    <>
                        <div>
                            {text.intentName}&nbsp;
                            {text.tags.length ? <Tag color={color}>{text.tags[0]}</Tag> : null}
                        </div>
                        {format_number(text.statisticsInfo.coverCnt)}
                    </>
                )
            }
        }
    },
    {
        title: '三级意图_人群数量',
        dataIndex: 'intentLevel_3',
        key: 'intentLevel_3',
        render: (text: any, record: any) => {
            if (text) {
                let color = '';
                switch (text.tags[0]) {
                    case '最新':
                        color = 'green';
                        break;
                    case '精选':
                        color = 'purple';
                        break;
                    default:
                }
                return (
                    <>
                        <div>
                            {text.intentName}&nbsp;
                            {text.tags.length ? <Tag color={color}>{text.tags[0]}</Tag> : null}
                        </div>
                        {format_number(text.statisticsInfo.coverCnt)}
                    </>
                )
            }
        }
    },
    {
        title: '四级意图_人群数量',
        key: 'intentLevel_4',
        dataIndex: 'intentLevel_4',
        render: (text: any, record: any) => {
            if (text) {
                let color = '';
                switch (text.tags[0]) {
                    case '最新':
                        color = 'green';
                        break;
                    case '精选':
                        color = 'purple';
                        break;
                    default:
                }
                return (
                    <>
                        <div>
                            {text.intentName}&nbsp;
                            {text.tags.length ? <Tag color={color}>{text.tags[0]}</Tag> : null}
                        </div>
                        {format_number(text.statisticsInfo.coverCnt)}
                    </>
                )
            }
        }
    },
    {
        title: '五级意图_人群数量',
        key: 'intentLevel_5',
        dataIndex: 'intentLevel_5',
        render: (text: any, record: any) => {
            if (text) {
                let color = '';
                switch (text.tags[0]) {
                    case '最新':
                        color = 'green';
                        break;
                    case '精选':
                        color = 'purple';
                        break;
                    default:
                }
                return (
                    <>
                        <div>
                            {text.intentName}&nbsp;
                            {text.tags.length ? <Tag color={color}>{text.tags[0]}</Tag> : null}
                        </div>
                        {format_number(text.statisticsInfo.coverCnt)}
                    </>
                )
            }
        }
    },
    {
        title: '操作',
        key: 'action',
        render: () => {
            return (
                <Space size={0}>
                    <CrowdModal />
                    <ServeModal />
                    <HooksModal />
                    <Popover content={moreAction} placement="bottom">
                        <Button type="link">更多<DownOutlined /></Button>
                    </Popover>
                </Space>
            )
        },
    },
];