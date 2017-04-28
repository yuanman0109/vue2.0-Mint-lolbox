<template>
  <div class="header" :class="{'search-wrapper':tab=='news','friend-wrapper':tab=='friends','find-wrapper':tab=='find','user-wrapper':tab=='me'}" :style="styleObject">
    <userHead class="pull-left"></userHead>
    <div class="pull-right">
      <i class="iconfont" :class="{'icon-sousuo':tab=='news','icon-jiahao':tab=='friends','icon-iconfont':tab=='find','icon-fenxiang':tab=='me'}"></i>
    </div>
  </div>
</template>
<script>
  import userHead from './userHead.vue'
  export default {
    props:{
      tab:{
        type:String,
      }
    },
    data(){
      return {
        styleObject:{
          background:''
        }
      }
    },
    methods:{
      userBt(){
        this.$store.commit('setSlide',true);
      }
    },
    components:{
      userHead
    }
  }
</script>
<style scoped>
  .header{
    position: fixed;
    left: 0;
    right: 0;
    height: 40px;
    z-index: 1000;
    padding: 5px;
    background: rgba(0, 0, 0, 0.5)
  }
  .userHead{
    width: 30px;
    height: 30px;
    border: 1px solid #cfbb8b;
    padding: 2px;
    border-radius: 50%;
    float: left;
  }
  .userHead img{
    max-width: 100%;
    border-radius: 50%;
  }
  /*.search-wrapper{
    width: 30px;
    height: 30px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
  }*/
  .header .pull-right i{
    color: #d3bf8d;
    display: block;
    font-size: 26px
  }
  /*.header .pull-right .search-wrapper i{
     font-size: 16px 
  }*/
</style>