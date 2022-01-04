import React from 'react';
import { Anchor, Row, Col } from 'antd';
function miss2() {
  return (
    <div
      style={{
        width: '1450px',
        // height: '7000px',
        margin: '20px auto',
      }}
    >
      <Row>
        <Col flex={10}>
          <div
            style={{
              background: 'red',
              // width: '70%',
              height: '7000px',
            }}
          >
            aa
          </div>
        </Col>
        <Col flex={2}>
          <div style={{ background: 'blue', width: '100px' }}>
            <Anchor targetOffset={50}>
              <Anchor.Link title="基本信息" />
              <Anchor.Link title="四方分析" />
              <Anchor.Link title="赌客发现" />
              <Anchor.Link title="关联信息" />
            </Anchor>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default React.memo(miss2);
