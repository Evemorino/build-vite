<!--
 * @Author: navalercon
 * @Date: 2023-01-09 09:06:30
 * @LastEditors: navalercon
 * @LastEditTime: 2023-01-10 08:37:11
 * @Description: 
-->
<template>
  <!-- <el-config-provider :locale="zhCn"> -->
  <router-view
    v-slot="{ Component }"
    class="w-100vw h-100vh relative overflow-hidden z-0 select-none page"
  >
    <transition>
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
  <!-- </el-config-provider> -->
</template>

<script setup lang="ts">
  // import zhCn from 'element-plus/es/locale/lang/zh-cn'
</script>

<style lang="less">
  @import './styles/index.less';
</style>
