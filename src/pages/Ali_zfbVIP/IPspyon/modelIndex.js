import React, { useEffect } from 'react';
import { connect } from 'react-redux';

useEffect(() => {
  // 激活model.js中的getBasicInfo
  dispatch({
    type: 'ipSpyon/getBasicInfo',
    params: {
      // ...请求参数
    },
  });
}, []);

// export default connect(state => state)('组件')
// export default connect(state => state.ipSpyon)('组件')
