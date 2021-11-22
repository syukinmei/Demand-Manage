import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Pie } from '@ant-design/charts';

export default function ServeModal() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    // 打开modal的毁掉
    const showModal = () => {
        setIsModalVisible(true);
    };

    // 点击确认的回调
    const handleOk = () => {
        // setIsModalVisible(false);
    };

    // 点击取消的回调
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const data = [
        {
            type: '分类一',
            value: 27,
        },
        {
            type: '分类二',
            value: 25,
        },
        {
            type: '分类三',
            value: 18,
        },
        {
            type: '分类四',
            value: 15,
        },
        {
            type: '分类五',
            value: 10,
        },
        {
            type: '其他',
            value: 5,
        },
    ];
    const config = {
        appendPadding: 10,
        data: data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        label: {
            type: 'outer',
            content: '{name} {percentage}',
        },
        interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
    };

    return (
        <>
            <Button type="link" onClick={showModal}>查看服务</Button>
            <Modal
                title="#我是意图名称#服务占比"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                maskClosable={false}
                width={900}
            >
                <Pie {...config} />
            </Modal>

        </>
    )
}