import React, { useEffect, useState } from 'react'
import Tabel from './components/Table';
import Fillter from './components/Filter';
import { IntentionContext } from './context';
import { Empty, Button } from 'antd';
export default function intention() {

    const [reqdata, setReqdata] = useState({});
    const [error, setError] = useState();

    useEffect(() => {
        fetch('/api/users')
            .then(data => data.json())
            .then(res => {
                setReqdata(res);
                console.log(res)
            })
            .catch(error => {
                setError(error);
            })
    }, [])
    return (
        <div>
            <IntentionContext.Provider value={{ reqdata }}>
                意图管理
                <Fillter />
                <br />
                {
                    error && error ? (
                        <Empty description='请求失败，请重试'>
                            <Button>重试</Button>
                        </Empty>
                    ) :
                        <>
                            <span>
                                截止#T+1 日期 # 共计意图xxx个，近7天新增意图xx个，其中人群数量是指近30天有该级别意图的人群数量
                            </span>
                            <Tabel />
                        </>
                }
            </IntentionContext.Provider>
        </div>
    )
}
