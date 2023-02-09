/*
 * @Author: navalercon
 * @Date: 2023-01-09 09:06:30
 * @LastEditors: navalercon
 * @LastEditTime: 2023-02-08 16:30:02
 * @Description:
 */
//vant
// import 'vant/es/toast/style';
// import 'vant/es/dialog/style';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { updateTheme } from './theme';

// 支持SVG
import 'virtual:svg-icons-register';
// windicss
import 'virtual:windi.css';

async function bootstrap() {
  const app = createApp(App);
  app.use(router);
  app.use(store);
  app.mount('#app', true);

  // 根节点挂载 dark 标识
  const appDesignSetting = window.localStorage.getItem('DESIGN-SETTING') as string;
  const darkMode = JSON.parse(appDesignSetting)?.darkMode || 'dark';
  updateTheme(darkMode);
}

void bootstrap();
