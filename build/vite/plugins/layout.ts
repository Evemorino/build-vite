/*
 * @Author: navalercon
 * @Date: 2023-01-09 15:24:02
 * @LastEditors: navalercon
 * @LastEditTime: 2023-01-09 15:25:09
 * @Description:
 */
import { type PluginOption } from 'vite';
import Layouts from 'vite-plugin-vue-layouts';

export const layoutsPlugin = () => {
  return Layouts({
    layoutsDirs: 'src/layout',
    exclude: ['**/components/**'],
    defaultLayout: 'default',
  }) as PluginOption;
};
