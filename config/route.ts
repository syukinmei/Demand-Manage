// 编写路由表
export const routes = [
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '/welcome',
    name: '首页',
    component: '@/pages/Welcome',
    icon: 'Home',
    // icon name 为 组件名小写后去掉 outlined 或者 filled 或者 twotone，所得值。举例：<UserOutlined /> 的 icon name 即： user
  },
  {
    path: '/ali',
    name: 'AL妈妈',
    icon: 'Alibaba',
    // routes 就是二级路由
    routes: [
      {
        path: '/ali/intention',
        name: '意图管理',
        component: '@/pages/Ali_zfbVIP/Intention',
      },
      {
        path: '/ali/spyon',
        name: 'IP侦查(天枢)',
        component: '@/pages/Ali_zfbVIP/IPspyon/Search',
        // routes: [
        //     { path: '/ali/spyon/details', component: '@/pages/Ali_zfbVIP/IPspyon/Details', }
        // ]
      },
      {
        path: '/ali/spyon/details/:url',
        component: '@/pages/Ali_zfbVIP/IPspyon/Details',
        name: '详情页',
      },
      {
        path: '/ali/missing',
        name: '待建',
        component: '@/pages/Ali_zfbVIP/missing',
      },
      {
        path: '/ali/missingJS',
        name: '布局',
        component: '@/pages/Ali_zfbVIP/missingJS',
      },
      {
        path: '/ali/Tianshu',
        name: '天枢大脑',
        component: '@/pages/Ali_zfbVIP/Tianshu',
      },
      {
        path: '/ali/no_jurisdiction',
        name: '暂无权限码',
        component: '@/pages/Ali_zfbVIP/NoJurisdiction/index.jsx',
      },
    ],
  },
  {
    path: '/user',
    name: '用户管理',
    icon: 'GoogleOutlined',
    routes: [
      {
        path: '/user/list',
        name: '用户列表',
        component: '@/pages/UserManage/UserList',
      },
    ],
  },
];
