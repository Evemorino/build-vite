/*
 * @Author: navalercon
 * @Date: 2023-01-09 15:08:18
 * @LastEditors: navalercon
 * @LastEditTime: 2023-01-09 15:12:13
 * @Description:
 */
import { createHtmlPlugin } from 'vite-plugin-html';

export const htmlPlugin = () => {
  // const { VITE_GLOB_APP_TITLE, VITE_PUBLIC_PATH } = env;

  // const path = VITE_PUBLIC_PATH.endsWith('/') ? VITE_PUBLIC_PATH : `${VITE_PUBLIC_PATH}/`;

  // const getAppConfigSrc = () => {
  //   return `${path || '/'}${GLOB_CONFIG_FILE_NAME}?v=${pkg.version}-${new Date().getTime()}`;
  // };

  return createHtmlPlugin({
    // minify: isBuild,
    minify: true,
    inject: {
      // Inject data into ejs template
      // 需要注入 index.html ejs 模版的数据 使用在 html 中 ：<div><%= title %></div>
      data: {
        // title: VITE_GLOB_APP_TITLE,
        title: '',
      },

      // Embed the generated app.config.js file 需要注入的标签列表
      // tags: true
      //   ? [
      //       {
      //         tag: 'script',
      //         attrs: {
      //           src: getAppConfigSrc(),
      //         },
      //       },
      //     ]
      //   : [],
      tags: [],
    },
  });
};
