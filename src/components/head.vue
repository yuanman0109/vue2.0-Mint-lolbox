<template>
  <div class="header" :class="{'header-news':styles.backgroundImage!='none','header-friend':tab=='friends'}">
    <div class="header-bg" :class="{'search-wrapper':tab=='news','friend-wrapper':tab=='friends','find-wrapper':tab=='find','user-wrapper':tab=='me'}" :style="styles"></div>
    <userHead></userHead>
    <p v-if="tab=='find'">发现</p>
    <div class="head-icon">
      <i class="iconfont" :class="{'icon-sousuo':tab=='news','icon-jiahao':tab=='friends','icon-iconfont':tab=='find','icon-fenxiang':tab=='me'}"></i>
    </div>
  </div>
</template>
<script>
  import userHead from './userHead.vue'
  export default {
    props:{
      tab:{
        type:String
      },
      styles:{
        type:Object
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
    overflow: hidden;
    display:flex;
    justify-content:space-between;
    align-items:center;
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
  .header-bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .header-news{
    background:#000;
  }
  .header-friend {
    background:url('../assets/header.png') no-repeat center;
    background-size:cover;
  }
  .search-wrapper{
    filter:blur(15px);
    -webkit-filter:blur(15px);
  }
  .header .head-icon i{
    color: #d3bf8d;
    display: block;
    font-size: 26px
  }
  .header p{
    color: #d3bf8d;
  }
</style>