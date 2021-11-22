import { defineConfig } from 'umi';
import { routes } from './config/route';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  
  routes,

  fastRefresh: {},

  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: 'syukinmei项目后台',
    locale: true,
    layout: 'side',
    logo: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3670654963,2180428618&fm=26&gp=0.jpg',
  },
});
