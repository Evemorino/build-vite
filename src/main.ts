/*
 * @Author: navalercon
 * @Date: 2023-01-09 09:06:30
 * @LastEditors: navalercon
 * @LastEditTime: 2023-01-10 08:13:14
 * @Description:
 */
//vant
// import 'vant/es/toast/style';
// import 'vant/es/dialog/style';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 支持SVG
import 'virtual:svg-icons-register';
// windicss
import 'virtual:windi.css';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
