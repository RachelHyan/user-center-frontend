import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  proxy: {
    '/api': {
      target: 'http://43.139.160.242:8080',
      changeOrigin: true,
    }
  },
  layout: {
    title: 'user-center',
  },
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      name: '登录',
      path: '/login',
      layout: false,
      component: './Login',
    },
    {
      name: '注册',
      path: '/register',
      layout: false,
      component: './Register',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
        name: ' CRUD 示例',
        path: '/table',
        component: './Table',
    },
    {
      name: '用户管理',
      path: '/user-manage',
      component: './UserManage',
    }
  ],
  npmClient: 'pnpm',
  // exportStatic: {},
});

