/*
 * @Author: navalercon
 * @Date: 2023-01-09 11:59:49
 * @LastEditors: navalercon
 * @LastEditTime: 2023-01-09 16:50:38
 * @Description:
 */
import vue from '@vitejs/plugin-vue';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import vueJsx from '@vitejs/plugin-vue-jsx';
import type { PluginOption } from 'vite';

import windiCSS from 'vite-plugin-windicss';
// import progress from 'vite-plugin-progress';

import { AutoImportDeps } from './autoImport';
import { AutoRegistryComponents } from './component';
// import { PagesPlugin } from './pages';
// import { layoutsPlugin } from './layout';
import { svgDev } from './svg';
// import { visualizerPlugin } from './visualize';
// import { mockPlugin } from './mock';
// import { compressPlugin } from './compress';
// import { htmlPlugin } from './html';
// import { restartPlugin } from './restart';

export function createVitePlugins(): (PluginOption | PluginOption[])[] {
  const plugins: Array<PluginOption | Array<PluginOption>> = [
    // vue支持
    vue(),
    // JSX支持
    vueJsx(),
    // setup语法糖组件名支持
    vueSetupExtend(),
  ];

  // 自动按需引入依赖
  plugins.push(AutoImportDeps());

  // 自动按需引入组件
  plugins.push(AutoRegistryComponents());

  // 自动生成svg雪碧图组件
  plugins.push(svgDev());

  // 自动生成路由
  // plugins.push(PagesPlugin());

  // 自动生成布局
  // plugins.push(layoutsPlugin());

  // 监听配置
  // plugins.push(restartPlugin());

  // 压缩
  // plugins.push(compressPlugin());

  // 打包生成HTML
  // plugins.push(htmlPlugin());

  // mock
  // plugins.push(mockPlugin());

  // visualize
  // plugins.push(visualizerPlugin());

  //windicss
  plugins.push(windiCSS());

  //progress 进度条
  // plugins.push(progress());

  return plugins;
}

// const plugins: PluginOption[] = [];

// export default plugins;
