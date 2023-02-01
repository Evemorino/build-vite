/*
 * @Author: navalercon
 * @Date: 2023-01-09 15:21:32
 * @LastEditors: navalercon
 * @LastEditTime: 2023-01-09 15:22:41
 * @Description:
 */
import visualizer from 'rollup-plugin-visualizer';
import type { PluginOption } from 'vite';

export const visualizerPlugin = () => {
  return visualizer({
    filename: './node_modules/.cache/visualizer/stats.html',
    open: true,
    gzipSize: true,
    brotliSize: true,
  }) as PluginOption;
};
