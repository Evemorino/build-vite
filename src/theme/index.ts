import { addClass, removeClass, hasClass } from '@/utils/domUtils';

// /**
//  * html 根标签上挂载 暗/亮 属性标识
//  */
// export function updateDarkSign(mode: 'light' | 'dark') {
//   const htmlRoot = document.getElementById('htmlRoot');
//   if (!htmlRoot) {
//     return;
//   }
//   const hasDarkClass = hasClass(htmlRoot, 'dark');

//   if (mode === 'dark') {
//     htmlRoot.setAttribute('data-theme', 'dark');
//     if (!hasDarkClass) {
//       addClass(htmlRoot, 'dark');
//     }
//   } else {
//     htmlRoot.setAttribute('data-theme', 'light');
//     if (hasDarkClass) {
//       removeClass(htmlRoot, 'dark');
//     }
//   }
// }

export function updateTheme(mode: 'light' | 'dark') {
  const htmlRoot = document.getElementById('htmlRoot');
  if (!htmlRoot) return;

  const hasDarkClass = hasClass(htmlRoot, 'dark');

  if (mode === 'dark') {
    htmlRoot.setAttribute('data-theme', 'dark');
    // if (!hasDarkClass) addClass(htmlRoot, 'dark');
  } else {
    htmlRoot.setAttribute('data-theme', 'light');
    // if (hasDarkClass) removeClass(htmlRoot, 'dark');
  }

  updateThemeClass(hasDarkClass, htmlRoot);
}

export function updateThemeClass(isDark: boolean, el: HTMLElement) {
  if (isDark) {
    removeClass(el, 'dark-theme');
    addClass(el, 'light-theme');
  } else {
    removeClass(el, 'light-theme');
    addClass(el, 'dark-theme');
  }
}
