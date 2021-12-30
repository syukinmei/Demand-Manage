import React, { useEffect } from 'react';
import { connect } from 'umi';
// import AssociatedInfo from './AssociatedInfo';
function missing(props: any) {
  console.log(props);
  return (
    <div>
      构建中。。。。
      {/* <AssociatedInfo></AssociatedInfo> */}
    </div>
  );
}

export default connect((state) => state)(missing);
