<template>
  <h3>这是开场动画页面</h3>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  mounted(){
    this.link()
  },
  methods:{
    link(){
      setTimeout(()=>{
        this.$router.push({name:'sing',parmars:{}})
      },1000)
    }
  }
}
</script>

<style>

</style>