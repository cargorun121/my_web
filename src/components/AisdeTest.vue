<template>

  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      :router="true"
  >
    <el-scrollbar height="100%">
    <h3>学习测试1</h3>
    <el-menu-item index="">
      <el-icon><icon-menu /></el-icon>
      <template #title>
        首页
      </template>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>用户管理1</span>
      </template>
      <el-menu-item-group title="用户管理">
        <el-menu-item index="user">
       用户
        </el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>、
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>

    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>xi</template>
    </el-menu-item>
    </el-scrollbar>
  </el-menu>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
el-menu{
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100%;
  border: 0;
  margin: 0;
  height: 100%;
}
.el-scrollbar__view {
  margin: 0;
  height: 100%;
}
.link-type{
  color: #ffffff;
}
h3{
  text-align: center;
  color: #fff;
  margin: 0;
}

</style>
