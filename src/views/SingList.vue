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
    <el-row :gutter="20">
      <el-col :span="8">
        <h1>{{getUser}}</h1>
      </el-col>
      <el-col :span="8">
        <el-button @click="fs1">点击同步修改</el-button>
      </el-col>
      <el-col :span="8">
        <el-button @click="fs2">点击异步修改</el-button>
      </el-col>
    </el-row>

  </div>

</template>

<script>
import {mapGetters} from 'vuex'
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
  },
  computed:{
    ...mapGetters(['getUser'])
  },
  methods:{
    fs1(){
      this.$store.commit('MODIFIY',this.tableData)
    },
    fs2(){
      this.$store.dispatch('MODILIYUSER','田甜')
    }
  }
}
</script>

<style>

</style>