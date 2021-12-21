const ipSpyonModel = {
  namespace: 'ipSpyon',

  state: {
    list: null,
    pageNum: 1,
    totalPage: 10,
  },

  effects: {
    // 基本信息模块列表数据的请求方法
    *getBasicInfo({ params }, { call, put }) {
      const result = yield call(basicInfoService, params);
      // 拿到结果
      console.log({ result });

      // 将请求的结果发送给reducers
      yield put({
        type: 'GET_BASIC_INFO', // type就是reducers中的方法名
        payload: result.data,
      });
    },
  },

  reducers: {
    // GET_BASIC_INFO(state, {payload}) {
    GET_BASIC_INFO(state, action) {
      /* 
                state 就是我们的state
                action 就是put发送过来的对象
            */

      // 赋值
      return {
        ...state,
        list: action.payload.basicInfo_list,
        pagenum: action.payload.pagenum,
        totalPage: action.payload.total,
      };
    },
  },
};

export default ipSpyonModel;

const basicInfoService = (params) =>
  request({
    url: 'users',
    data: params,
  });
