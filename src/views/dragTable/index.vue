<!--
 * @Author: navalercon
 * @Date: 2023-01-09 16:41:28
 * @LastEditors: navalercon
 * @LastEditTime: 2023-01-10 15:48:41
 * @Description: 
-->
<template>
  <section>
    <!-- <a-table :data-source="dataSource" :columns="columns" /> -->
  </section>
</template>

<script lang="ts" setup>
  import axios from 'axios';

  type APIParams = {
    results: number;
    page?: number;
    sortField?: string;
    sortOrder?: number;
    [key: string]: any;
  };
  type APIResult = {
    results: {
      gender: 'female' | 'male';
      name: string;
      email: string;
    }[];
  };

  const queryData = async (params: APIParams) => {
    return axios.get<APIResult>('https://randomuser.me/api?noinfo', { params });
  };

  // const;

  // const dataSource = [
  //   {
  //     key: '1',
  //     name: '胡彦斌',
  //     age: 32,
  //     address: '西湖区湖底公园1号',
  //   },
  //   {
  //     key: '2',
  //     name: '胡彦祖',
  //     age: 42,
  //     address: '西湖区湖底公园1号',
  //   },
  // ];

  // const columns = [
  //   {
  //     title: '姓名',
  //     dataIndex: 'name',
  //     key: 'name',
  //   },
  //   {
  //     title: '年龄',
  //     dataIndex: 'age',
  //     key: 'age',
  //   },
  //   {
  //     title: '住址',
  //     dataIndex: 'address',
  //     key: 'address',
  //   },
  // ];
</script>

<style lang="less" scoped></style>
