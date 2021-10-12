import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', 
    component: '@/pages/index' ,
    routes:[
      {path: '/', redirect:'/requests'},
      {path: '/requests', component: '@/pages/RequestList' },
      {path: '/organizations',component: '@/pages/Organizations'}
    ]},
  ],
  fastRefresh: {},
});
