export default {
    // 支持值为 Object 和 Array
    'GET /api/users': {
        data: [
            {
                key: '1',
                intentLevel_1: {
                    intentName: '财富',
                    tags: ['精选'],
                    statisticsInfo: {
                        coverCnt: 254462753,
                    },
                },
                intentLevel_2: {
                    intentName: '财富',
                    tags: ['精选'],
                    statisticsInfo: { // 报表数据
                        // 覆盖人数
                        coverCnt: 237452653,
                    },
                },
                intentLevel_3: {
                    intentName: '购买基金',
                    tags: ['最新'],
                    statisticsInfo: {
                        coverCnt: 234498453,
                    },
                },
                intentLevel_4: '',
                intentLevel_5: '',
            },
            {
                key: '2',
                intentLevel_1: {
                    intentName: '财富',
                    tags: ['最新'],
                    statisticsInfo: {
                        coverCnt: 387321912,
                    },
                },
                intentLevel_2: {
                    intentName: '财富',
                    tags: [],
                    statisticsInfo: {
                        coverCnt: 324782653,
                    },
                },
                intentLevel_3: {
                    intentName: '购买基金',
                    tags: [],
                    statisticsInfo: {
                        coverCnt: 267452653,
                    },
                },
                intentLevel_4: {
                    intentName: '端商户',
                    tags: [],
                    statisticsInfo: {
                        coverCnt: 234452153,
                    },
                },
                intentLevel_5: {
                    intentName: '交易订单',
                    tags: [],
                    statisticsInfo: {
                        coverCnt: 234232653,
                    },
                },
            },
            {
                key: '3',
                intentLevel_1: {
                    intentName: '财富',
                    tags: [],
                    statisticsInfo: {
                        coverCnt: 387321912,
                    },
                },
                intentLevel_2: {
                    intentName: '财富',
                    tags: [],
                    statisticsInfo: {
                        coverCnt: 324782653,
                    },
                },
                intentLevel_3: {
                    intentName: '买家设备',
                    tags: [],
                    statisticsInfo: {
                        coverCnt: 232152653,
                    },
                },
                intentLevel_4: {
                    intentName: '财富',
                    tags: [],
                    statisticsInfo: {
                        coverCnt: 239862153,
                    },
                },
                intentLevel_5: {
                    intentName: '财富',
                    tags: [],
                    statisticsInfo: {
                        coverCnt: 324232563,
                    },
                },
            },
            {
                key: '4',
                intentLevel_1: {
                    intentName: '财富',
                    tags: ['精选'],
                    statisticsInfo: {
                        coverCnt: 254462753,
                    },
                },
                intentLevel_2: {
                    intentName: '财富',
                    tags: ['精选'],
                    statisticsInfo: {
                        coverCnt: 237452653,
                    },
                },
                intentLevel_3: '',
                intentLevel_4: '',
                intentLevel_5: '',
            }
        ],
        authorized: true,
    },

    // 查看意图关联服务
    'queryAppletsService': {
        data: {
            intentId: '1', // 返回的意图id
            serverInfoList: [ // 返回的服务数据 必须：否
                {
                    // serverMetaData
                    serverCode: '', // 服务编码
                    serverName: '', // 服务名称
                    // StatisticsInfo
                    coverCnt: 23213123, // 覆盖人群
                    coverIntentPercent: 32.1231 // 覆盖人群占比，保留四位小数
                }
            ]
        }
    },

    // 查看意图对应钩子
    'GET /api/intentHook': {
        data: [
            {
                key:'1',
                hooksName: '钩子名称钩子名称',
                hooksID: 'HK_10086',
                state: '在线',
                type: '红包',
                indate: '2021-08-13',
                owner: '漪沦',
            },
            {
                key:'2',
                hooksName: '钩子名称噜噜噜',
                hooksID: 'HK_10010',
                state: '在线',
                type: '红包',
                indate: '2021-11-22',
                owner: '潇伊',
            }
        ]
    },

    // GET 可忽略
    '/api/users/1': { id: 1 },

    // 支持自定义函数，API 参考 express@4
    'POST /api/users/create': (req: any, res: any) => {
        // 添加跨域请求头
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.end('ok');
    },
}