<template>
  <div class="singList">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <h3>这是主界面，播放列表</h3>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <template>
          <el-table :data="tableData"
                    height="250"
                    style="width: 100%">
                    <el-table-column
                      prop="label"
                      label="播放列表"
                      width="180">
                    </el-table-column>
            </el-table>
                  
        </template>
      </el-col>
      <el-col :span="16">歌词</el-col>
    </el-row>

  </div>

</template>

<script>
export default {
  data(){
    return {
      tableData: [
        {
          label: '我的收藏'
        },
        {
          label: '古风'
        },
        {
          label: '电音'
        }
      ]
    }
  }
}
</script>

<style>

</style>