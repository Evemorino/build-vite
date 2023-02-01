/*
 * @Author: navalercon
 * @Date: 2023-01-09 09:20:43
 * @LastEditors: navalercon
 * @LastEditTime: 2023-01-10 17:05:37
 * @Description:
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const Component: DefineComponent<{}, {}, any>;
  export default Component;
}

declare module 'virtual:*' {
  const result: any;
  export default result;
}
