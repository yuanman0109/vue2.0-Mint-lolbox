<template>
  <div class="userHead" @click="userBt">
      <img src="../assets/headimg.png" alt="username">
  </div>
</template>
<script>
  export default {
    name:'userHead',
    methods:{
      userBt(){
        this.$store.commit('setSlide',{
          isShow:true,
          type:'btn'
        });
      }
    }
  }
</script>
<style scoped>
  .userHead{
    width: 30px;
    height: 30px;
    border: 1px solid #cfbb8b;
    padding: 2px;
    border-radius: 50%;
  }
  .userHead img{
    max-width: 100%;
    border-radius: 50%;
  }
</style>