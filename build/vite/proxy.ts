/*
 * @Author: navalercon
 * @Date: 2023-01-09 09:14:39
 * @LastEditors: navalercon
 * @LastEditTime: 2023-01-09 14:09:44
 * @Description:
 */
import type { ProxyOptions } from 'vite';
type ProxyTargetList = Record<string, ProxyOptions>;

const proxy: ProxyTargetList = {
  // '/upload': {
  //   target: 'http://localhost:8001/upload',
  //   changeOrigin: true,
  //   ws: true,
  //   rewrite: (path) => path.replace(new RegExp(/^\/upload/), ''),
  // },
};

export default proxy;
