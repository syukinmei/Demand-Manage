import { message } from 'antd';
import { data3 } from './Details/config';
const add = (value) => {
  return value + 1;
};

const ipSpyon_searchModel = {
  namespace: 'ipSpyonSearch', // 命名空间

  state: {
    // 数据
    data: data3,
    total: 448,
  },

  effects: {
    // action
    *getData({ params }, { call, put }) {
      // 请求数据的异步操作
      const result = yield call(add, params);
      message.error(result);
    },
  },

  reducers: {
    // 用于修改数据
  },
};

export default ipSpyon_searchModel;
