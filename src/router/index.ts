/*
 * @Author: navalercon
 * @Date: 2023-01-09 15:48:48
 * @LastEditors: navalercon
 * @LastEditTime: 2023-01-09 15:52:12
 * @Description:
 */
import { createRouter, createWebHashHistory } from 'vue-router';

import routes from './routes';
import { GuardMain } from './router-guard';

// 自动导入路由
// import routes from 'virtual:generated-pages';
// routes.push({
//   path: '/',
//   redirect: '/login',
// });

//导入生成的路由数据
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

GuardMain(router);

export default router;
