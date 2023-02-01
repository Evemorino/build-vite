/*
 * @Author: navalercon
 * @Date: 2023-01-09 15:50:28
 * @LastEditors: navalercon
 * @LastEditTime: 2023-01-09 16:51:16
 * @Description:
 */
import type { NavigationGuardNext, RouteLocationNormalized, Router } from 'vue-router';

// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';

export function GuardMain(_router: Router): void {
  _router.beforeEach(
    async (
      _to: RouteLocationNormalized,
      _from: RouteLocationNormalized,
      _next: NavigationGuardNext
    ) => {
      // NProgress.start();
      _next();
    }
  );

  _router.afterEach(async (_to: RouteLocationNormalized) => {
    // NProgress.done();
  });
}
