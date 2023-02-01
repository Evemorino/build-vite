/*
 * @Author: navalercon
 * @Date: 2023-01-09 15:53:53
 * @LastEditors: navalercon
 * @LastEditTime: 2023-01-09 15:57:36
 * @Description:
 */
import { createPinia } from 'pinia';

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

// export { useAppStore, useUserStore };
export default pinia;
