/*
 * @Author: navalercon
 * @Date: 2023-01-09 15:42:11
 * @LastEditors: navalercon
 * @LastEditTime: 2023-02-09 11:41:22
 * @Description:
 */
import { type PluginOption } from 'vite';
import ViteRestart from 'vite-plugin-restart';

export const restartPlugin = () => {
  return ViteRestart({
    restart: ['*.config.[jt]s', '**/config/*.[jt]s'],
  }) as PluginOption;
};
// ViteRestart({
//   restart: ['my.config.[jt]s'],
// });
// restart: ['*.config.[jt]s', '**/config/*.[jt]s']
