import { ElHeader } from 'element-plus';
import { MAX_HEADER } from '@/layout/settings';
import styles from './navigation_bar.module.less';

const navigation_button = defineComponent({
  name: 'NavigationButton',
  setup() {
    return () => (
      <section class={styles.right}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </section>
    );
  },
});

const navigation_bar = defineComponent({
  name: 'NavigationBar',
  components: {
    'el-header': ElHeader,
    'navigation-button': navigation_button,
  },
  setup() {
    return () => (
      <el-header height={`${MAX_HEADER}px`} class={styles.navigation}>
        <section class={styles.left}></section>
        <navigation_button />
      </el-header>
    );
  },
});

export default navigation_bar;
