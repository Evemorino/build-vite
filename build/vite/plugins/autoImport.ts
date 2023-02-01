/*
 * @Author: navalercon
 * @Date: 2023-01-09 15:04:26
 * @LastEditors: navalercon
 * @LastEditTime: 2023-01-10 08:49:35
 * @Description:
 */
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { type PluginOption } from 'vite';

//按需加载，自动引入
export const AutoImportDeps = () => {
  return AutoImport({
    dts: 'types/auto-imports.d.ts',
    imports: [
      'vue',
      'pinia',
      'vue-router',
      '@vueuse/core',
      // '@vueuse/head',
      // ''
      // {
      //   '@vueuse/core': [],
      // },
    ],
    resolvers: [ElementPlusResolver()],
  }) as PluginOption;
};
