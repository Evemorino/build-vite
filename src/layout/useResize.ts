import { type Ref } from 'vue';

const ScreenMinValue = 1400;

export type ResizeResult = {
  isShown: Ref<boolean>;
};

export default function (): ResizeResult {
  const isShown = ref<boolean>(true);

  const setHandler = () => {
    isShown.value = window.innerWidth <= ScreenMinValue ? false : true;
  };

  const resizeHandler = (e) => {
    if (!e.srcElement) return;
    const el = e.srcElement;
    console.log(el.innerWidth);
    isShown.value = el.innerWidth <= ScreenMinValue ? false : true;
  };

  onMounted(() => {
    setHandler();
    window.addEventListener('resize', resizeHandler);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', resizeHandler);
  });

  return {
    isShown,
  };
}
