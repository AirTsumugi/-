<template>
  <div>
    <el-menu :default-active="this.$router.path" class="el-menu-demo" router  mode="horizontal">
      <el-menu-item index="/Singlist" path="/Singlist">播放列表</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的</template>
        <el-menu-item index="/User">我的信息</el-menu-item>
        <el-menu-item index="2-2">我的收藏</el-menu-item>
        <el-menu-item index="/Settting">设置</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
      return {
        num: 1
      };
    },
    methods: {
    }
  
}
</script>

<style lang='less' scoped>
    h3{
        color: red;
        span{
            color: blue;
        }
    }
    .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
