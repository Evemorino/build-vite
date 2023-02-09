<!--
 * @Author: navalercon
 * @Date: 2023-02-08 16:49:46
 * @LastEditors: navalercon
 * @LastEditTime: 2023-02-09 09:29:29
 * @Description: 
-->
<template>
  <section>
    <el-container class="h-full w-full">
      <side-bar v-model:show="isShown" />
      <el-container direction="vertical" class="h-full overflow-hidden">
        <navigation-bar />
        <tags-nav />
        <app-main />
      </el-container>
    </el-container>
  </section>
</template>

<script lang="ts" setup>
  import { SideBar, NavigationBar, TagsNav, AppMain } from './components';
  import useResize from './useResize';

  const { isShown } = useResize();
</script>

<style lang="less" scoped>
  :deep(.el-header) {
    padding: 0;
  }
</style>
