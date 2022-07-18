<template>
    <div class="common-layout">
      <el-container class="el-com">
        <el-aside width="200px" height="100%">
            <aside-test></aside-test>
        </el-aside>
        <el-container>
          <el-header class="el-header">Header</el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

  <style lang="less">
    .common-layout{
      height: 100%;
      line-height:30px;
    }
    el-container{
      height: 100%;
    }
    .el-com{
      height: 100%;
    }
    .el-header{
      background-color: black;
    }
    .a11{
      height: 100%;
    }

  </style>
  <script>
    import AsideTest from "./AisdeTest";
    import getData from '../api/data.js'
    export default {
      components: {AsideTest},
      mounted() {
        getData().then(res=>{
          console.log(res)
        })
      }

    }
  </script>