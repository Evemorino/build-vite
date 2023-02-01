/*
 * @Author: navalercon
 * @Date: 2023-01-09 15:49:45
 * @LastEditors: navalercon
 * @LastEditTime: 2023-01-28 10:37:06
 * @Description:
 */

import { type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dragTable',
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
];

export default routes;
