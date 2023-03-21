import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  proxy: {
    '/api': {
      target: 'http://localhost:8080',
      changeOrigin: true,
    }
  },
  layout: {
    title: '@umijs/max',
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
  ],
  npmClient: 'pnpm',
});

