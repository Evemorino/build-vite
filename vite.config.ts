/*
 * @Author: navalercon
 * @Date: 2023-01-09 09:06:30
 * @LastEditors: navalercon
 * @LastEditTime: 2023-02-09 11:28:00
 * @Description: vite's configuration
 */
import { UserConfig } from 'vite';
import resolves from './build/vite/resolve';
import css from './build/vite/css';
import server from './build/vite/server';
import { createVitePlugins } from './build/vite/plugins';

export default (): UserConfig => {
  const base = '/';

  const root = process.cwd();

  const plugins = createVitePlugins();

  return {
    base: base,

    root: root,

    resolve: resolves,

    plugins: plugins,

    css: css,

    server: server,
  };
};
