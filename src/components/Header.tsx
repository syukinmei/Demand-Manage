import React from 'react'
import './style.less';
import { Button } from 'antd';

export default function Header() {
    return (
        <div className="header-container">
            当前操作用户：syukonmei <Button type='primary' danger> 退出 </Button>
        </div>
    )
}
