<template>
  <div id="app">
    <transition name="fade">
      <div class="loadingBox" v-if="isloading"></div>
    </transition>
    <div class="sidebar" id="sidebar">
      <div class="slide-bg"></div>
      <div class="head">
        <div class="userHead">
            <img src="./assets/headimg.png" alt="username">
        </div>
        <h2>英雄召唤师<span class="badge"><i class="iconfont icon-nan"></i>25</span></h2>
        <p>无个性，不签名</p>
        <div class="myCard">
          <i class="iconfont icon-mingpian"></i>
          <p>我的名片</p>
        </div>
      </div>
      <div class="menu">
        <ul>
          <li><i class="iconfont icon-dongtai"></i>我的动态</li>
          <li><i class="iconfont icon-xiazai"></i>我的下载</li>
          <li><i class="iconfont icon-tianjiadingyue"></i>我的订阅</li>
          <li><i class="iconfont icon-shoucang"></i>我的收藏</li>
          <li><i class="iconfont icon-dingdan"></i>我的订单</li>
        </ul>
      </div>
      <div class="foot">
        <div class="setting-wrapper">
          <i class="iconfont icon-shezhi"></i>设置
        </div>
      </div>
    </div>
    <transition name="fade-view">
      <div class="main" id="main">
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Slideout from 'slideout'
export default {
  name: 'app',
  data () {
    return {
      isloading:true,
    }
  },
  watch:{
    slideShow:function(n,o){
      //判断下n和o的值，否则会执行俩次
      if(n && n!=o){
        this.slideout.open();
      }
    }
  },
  computed:{
    slideShow(){
      return this.$store.state.slideout;
    }
  },
  mounted:function(){
    const _this=this;
    setTimeout(()=>{
       this.isloading=false;
    },1000);
    this.$nextTick(function(){
      this.slideout = new Slideout({
        'panel': document.getElementById("main"),
        'menu': document.getElementById("sidebar"),
        'padding': 256,
        'tolerance': 70
      });
      this.slideout.on('close', function() { 
        _this.setSlide(false);
      });
      this.slideout.on('open', function() { 
        console.log(1)
        _this.setSlide(true);
      });
    })
  },
  methods:{
    ...mapMutations([
      'setSlide' // 映射 this.increment() 为 this.$store.commit('increment')
    ]),
  },
  components:{
  }
}
</script>

<style>
html,body,#app,.main{
  height: 100%;
}
body{
  margin: 0;
  font-family: "Hiragino Sans GB","华文细黑",STHeiti,"微软雅黑","Microsoft YaHei",SimHei,"Helvetica Neue",Helvetica,Arial,sans-serif!important;
}
#app {
  color: #2c3e50;
  background: #fff;
}
*{
  box-sizing: border-box;
}
p,h1, h2 {
  margin: 0;
}
h1, h2 {
  font-weight: normal;
}
img{
  max-width: 100%;
}
ul {
  margin: 0;
  list-style-type: none;
  padding: 0;
}
a {
  color: #666;
  text-decoration: none;
}
.loadingBox{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: url("./assets/loading.png") no-repeat center;
  background-size: cover;
}
.loadingBox img{
  max-width: 100%;
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0
}
.fade-view-enter-active, .fade-view-leave-active {
  transition: opacity .5s;
  position: absolute;
}
.fade-view-enter, .fade-view-leave-active {
  opacity: 0;
  position: absolute;
}
.main{
  position: relative;
  z-index: 10;
  background: #fff;
}
.sidebar{
  width: 256px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  color: #fff;
  overflow-y: scroll;
  display: none;
}
.slide-bg{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0,0,0,0.5) url('./assets/sidebar.jpg') no-repeat center;
  background-size: cover;
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray;
  z-index: -1;
}
.slideout-open,
.slideout-open body,
.slideout-open .main {
  overflow: hidden;
}
.slideout-open .sidebar {
  display: block;
}
.sidebar .head{
  padding: 20px 20px 10px 10px;
}
.sidebar .head .userHead{
  width: 50px; 
  height: 50px;
  border: 1px solid #cfbb8b;
  padding: 1px;
  border-radius: 50%;
}
.sidebar .head .userHead img{
  border-radius: 50%;
}
</style>
