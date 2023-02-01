/*
 * @Author: navalercon
 * @Date: 2023-01-09 15:12:41
 * @LastEditors: navalercon
 * @LastEditTime: 2023-01-09 15:38:30
 * @Description:
 */
import { type PluginOption } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';

export function mockPlugin() {
  return viteMockServe({
    ignore: /^\_/,
    mockPath: 'mock',
    localEnabled: true,
    // localEnabled: !isBuild,
    // prodEnabled: isBuild && prodMock,
    prodEnabled: true,
    injectCode: `
      import { setupProdMockServer } from '../mock/_createProductionServer';

      setupProdMockServer();
      `,
  }) as PluginOption;
}
