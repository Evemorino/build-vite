import styles from './side_bar.module.less';
import { ElScrollbar, ElAside } from 'element-plus';
import { Transition } from 'vue';
import { MIN_SIDE, MAX_SIDE } from '@/layout/settings';

const side_logo = defineComponent({
  name: 'SideLogo',
  setup() {
    return () => (
      <header>
        <button></button>
      </header>
    );
  },
});

const side_menu = defineComponent({
  name: 'SideMenu',
  setup() {
    return () => (
      <main>
        <div>13213</div>
      </main>
    );
  },
});

const side = defineComponent({
  name: 'SideBar',
  components: {
    'side-logo': side_logo,
    'side-menu': side_menu,
    'el-aside': ElAside,
    'el-scrollbar': ElScrollbar,
    transition: Transition,
  },
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
  emits: {
    'update:show': (_value: boolean) => true,
  },
  setup(props) {
    const widthValue = computed(() => {
      return props.show ? MAX_SIDE : MIN_SIDE;
    });

    return () => (
      <transition>
        <el-aside width={`${widthValue.value}px`}>
          <section class={styles.side_bar + ' h-full'}>
            <el-scrollbar>
              <div>{widthValue.value}</div>
              <button>测试</button>
              <side-logo />
              <side-menu />
            </el-scrollbar>
          </section>
        </el-aside>
      </transition>
    );
  },
});

export default side;
