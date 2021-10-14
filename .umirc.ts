import { defineConfig } from 'umi';

export default defineConfig({
  base: '/',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/login',
      component: '@/pages/Login',
      wrappers: [
        '@/wrappers/reduxWrapper'
      ]
    },
    { 
      path: '/admin', 
      component: '@/pages/Admin/index',
      routes:[
        {path: '/admin/', redirect:'/admin/requests'},
        {path: '/admin/requests', component: '@/pages/Admin/components/RequestList' },
        {path: '/admin/organizations',component: '@/pages/Admin/components/Organizations'}
      ],
      wrappers: [
        '@/wrappers/isLogin',
        '@/wrappers/isAdmin',
        '@/wrappers/reduxWrapper'
      ]
    },
    {
      path: '/user',
      redirect: '/user/main'
    },
    {
      path: '/user/main',
      component: '@/pages/UserMainPage',
      wrappers: [
        '@/wrappers/isLogin'
      ]
    },
    {
      path: '/user/detail',
      component: '@/pages/UserDetailPage',
      wrappers: [
        '@/wrappers/isLogin'
      ]
    },
    {
      path: '*',
      redirect: '/login'
    }
  ],
  fastRefresh: {},
});
