<!--
 * @Author: navalercon
 * @Date: 2023-01-09 09:06:30
 * @LastEditors: navalercon
 * @LastEditTime: 2023-02-08 17:30:02
 * @Description: 
-->
<template>
  <el-config-provider :locale="zhCn">
    <router-view
      class="page bg-light-50 w-100vw h-100vh relative overflow-hidden z-0 select-none"
    />
  </el-config-provider>
</template>

<script setup lang="ts">
  import zhCn from 'element-plus/es/locale/lang/zh-cn';
</script>

<style lang="less">
  @import './styles/index.less';
</style>
