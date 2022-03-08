import React from 'react';
import { message, Button, Result } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function NoJurisdiction() {
  const needUrl = 'http://www.baidu.com';
  return (
    <Result
      status="403"
      title="暂无XX页面的权限"
      subTitle={
        <>
          <p>请先复制如下权限码，再申请权限</p>
          <span>AFSC_TSURE_IP_INVESTIGATION</span>
          <CopyToClipboard
            text={'AFSC_TSURE_IP_INVESTIGATION'}
            onCopy={() => message.success('已复制到剪切板')}
          >
            <Button type="link">复制</Button>
          </CopyToClipboard>
        </>
      }
      extra={
        <Button href={needUrl} target="_blank" type="primary">
          去申请
        </Button>
      }
    ></Result>
  );
}

export default React.memo(NoJurisdiction);
// userInfo
// bumngLogoutURL
// noPermissDomain
// needUrl
