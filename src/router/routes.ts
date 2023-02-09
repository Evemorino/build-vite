/*
 * @Author: navalercon
 * @Date: 2023-01-09 15:49:45
 * @LastEditors: navalercon
 * @LastEditTime: 2023-02-08 17:00:09
 * @Description:
 */
import { type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
      },
      {
        path: '/dragTable',
        name: 'dragTable',
        component: () => import('@/views/dragTable/index.vue'),
      },
    ],
  },
];

export default routes;
