import React from 'react';
import { Button } from 'antd';
const Search = () => {
    const onSearch = () => {
        // window.open('/ali/spyon/details');
        location.href = '/ali/spyon/details';
    }
    return (
        <div>
            Search搜索页面
            <Button onClick={onSearch}>跳转</Button>
        </div>
    )
}
export default React.memo(Search);