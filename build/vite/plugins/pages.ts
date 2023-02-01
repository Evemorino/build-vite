/*
 * @Author: navalercon
 * @Date: 2023-01-09 15:18:20
 * @LastEditors: navalercon
 * @LastEditTime: 2023-01-09 16:38:50
//  * @Description:
 */
import { type PluginOption } from 'vite';
import Pages from 'vite-plugin-pages';

export const PagesPlugin = () => {
  return Pages({
    pagesDir: [{ dir: 'src/views', baseRoute: '' }],
    extensions: ['vue', 'tsx'],
    // exclude: ['**/components/**/*.{vue,ts,js,tsx}', '**/composables/**/*.{vue,ts,js,tsx}'],
    exclude: [
      '**/components/**/*.{vue,ts,js,tsx}',
      '**/components/**/components/**/*.{vue,ts,js,tsx}',
    ],
    nuxtStyle: true,
  }) as PluginOption;
};
