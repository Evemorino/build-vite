/*
 * @Author: navalercon
 * @Date: 2023-01-09 14:18:42
 * @LastEditors: navalercon
 * @LastEditTime: 2023-01-09 14:22:18
 * @Description:
 */
import type { UserConfig } from 'vite';

// 定义全局常量替换方式
export const defineSettings: UserConfig['define'] = {
  // 在生产中 启用/禁用 intlify-devtools 和 vue-devtools 支持，默认值 false
  __INTLIFY_PROD_DEVTOOLS__: false,
  // __APP_INFO__: JSON.stringify(__APP_INFO__),
};

export const esbuildSettings: UserConfig['esbuild'] = {
  // 使用 esbuild 压缩 剔除 console.log
  // pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : [],
  // minify: true, // minify: true, 等于 minify: 'esbuild',
};

export const buildSettings: UserConfig['build'] = {
  // 设置最终构建的浏览器兼容目标
  target: 'es2015',
  minify: 'esbuild',
  // 构建后是否生成 source map 文件(用于线上报错代码报错映射对应代码)
  sourcemap: false,
  cssTarget: 'chrome80',
  // 指定输出路径（相对于 项目根目录)
  // outDir: OUTPUT_DIR,
  // 只有 minify 为 terser 的时候, 本配置项才能起作用
  // terserOptions: {
  //   compress: {
  //     // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
  //     keep_infinity: true,
  //     // 打包是否自动删除 console
  //     drop_console: VITE_DROP_CONSOLE,
  //   },
  // },
  // 启用/禁用 gzip 压缩大小报告
  // 压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能
  reportCompressedSize: true,
  // chunk 大小警告的限制（以 kbs 为单位）
  chunkSizeWarningLimit: 2000,
};

export const optimizeSettings: UserConfig['optimizeDeps'] = {
  include: [],
  // 打包时强制排除的依赖项
  exclude: [],
};
