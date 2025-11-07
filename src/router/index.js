// createRouter：创建路由实例
// createWebHistory：创建历史模式路由

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
// 可以进行懒加载导入

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path 和 component 对应关系的位置
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          // 默认二级路由，path配置项为空字符串
          // 访问 / 时，会渲染 Home 组件
          path: '',
          component: Home
        },
        {
          path: '/category',
          component: Category
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
  ],
})

export default router
