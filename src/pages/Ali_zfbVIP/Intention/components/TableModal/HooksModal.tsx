import React, { useState, useEffect } from 'react';
import { Modal, Button, Table } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import './style.less';
import { openDownloadDialog, sheet2blob } from './xlsx';
import XLSX from "xlsx";

type Typehooksdata = {
    hooksName: 'string'
    hooksID: 'string'
    state: 'string'
    type: 'string'
    indate: 'string'
    owner: 'string'
}[]

export default function CrowdModal() {

    const [hooksdata, setHooksdata] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    // 打开modal的毁掉
    const showModal = () => {
        setIsModalVisible(true);
        fetch('/api/intentHook')
            .then(data => data.json())
            .then(res => {
                setHooksdata(res.data);
            });
    };

    // 点击确认的回调
    const handleOk = () => {
        setIsModalVisible(false);
    };

    // 点击取消的回调
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="hooksModal">
            <Button type="link" onClick={showModal}>查看钩子</Button>
            <Modal
                title={modalTitle(hooksdata)}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                maskClosable={false}
                width={900}
            >
                <Table columns={columns} dataSource={hooksdata}/>
            </Modal>

        </div>
    )
}


const columns = [
    {
        title: '钩子名称',
        dataIndex: 'hooksName',
        key: 'name',
    },
    {
        title: '钩子ID',
        dataIndex: 'hooksID',
        key: 'ID',
        render: (text: string) => <Button type='link'>{text}</Button>
    },
    {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
    },
    {
        title: '类型',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: '有效期',
        dataIndex: 'indate',
        key: 'indate',
    },
    {
        title: 'owner',
        dataIndex: 'owner',
        key: 'owner',
    }
]



function modalTitle(hooksdata: Typehooksdata) {
    return (
        <div className='hooksModal-Title'>
            <div className='hooksModal-Title-title'>#我是意图名称#钩子列表</div>
            <Button
                type="link"
                icon={<DownloadOutlined />}
                onClick={() => btn_export(hooksdata)}
            >下载列表</Button>
        </div>
    )
}

function btn_export(data: Typehooksdata) {
    var sheet = XLSX.utils.json_to_sheet(data); //将一个json对换成一个sheet对象
    openDownloadDialog(sheet2blob(sheet), "下载.xlsx");
}