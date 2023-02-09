<template>
  <router-view v-slot="{ Component }">
    <transition>
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script lang="ts" setup name="AppMain">
  // const routes = useRoute();
</script>

<style lang="less" scoped src="./app_main.module.less"></style>

<!-- const app_main = defineComponent({ name: 'AppMain', components: { transition: Transition, }, setup()
{ return () => ( ); }, }); export default app_main; -->
