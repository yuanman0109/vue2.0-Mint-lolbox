<template>
  <div id="app">
    <transition name="fade">
      <div class="loadingBox" v-if="isloading"></div>
    </transition>
    <div class="sidebar" id="sidebar">
      <div class="slide-bg"></div>
        <div class="sidebar-content">
        <div class="head">
          <div class="userHead">
              <img src="./assets/headimg.png" alt="username">
          </div>
          <h2><big>英雄召唤师</big><span class="badge"><i class="iconfont icon-nan"></i><abbr>25</abbr></span></h2>
          <p>无个性，不签名</p>
          <div class="myCard">
            <i class="iconfont icon-mingpian"></i>
            <p>我的名片</p>
          </div>
        </div>
        <div class="menu">
          <ul>
            <li><i class="iconfont icon-dongtai"></i><span>我的动态</span></li>
            <li><i class="iconfont icon-xiazai"></i><span>我的下载</span></li>
            <li><i class="iconfont icon-tianjiadingyue"></i><span>我的订阅</span></li>
            <li><i class="iconfont icon-shoucang"></i><span>我的收藏</span></li>
            <li><i class="iconfont icon-dingdan"></i><span>我的订单</span></li>
          </ul>
        </div>
        <div class="foot">
          <div class="setting-wrapper">
            <i class="iconfont icon-shezhi"></i><span>设置</span>
          </div>
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
    ])
  },
  components:{
  }
  }
</script>

<style lang="stylus">
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
    font-size: 12px;
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
  .pull-left{
    float left
  }
  .pull-right {
    float right
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
  .sidebar-content{
    background: rgba(0,0,0,0.5);
    height: 100%;
    padding: 20px;
    position relative;
  }
  .slide-bg{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: url('./assets/sidebar.jpg') no-repeat center;
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
    padding-bottom:10px;
    position: relative;
    h2{
      line-height 16px
      padding 5px 0 3px
      big{
        font-size:14px
        vertical-align middle
        line-height 10px
        margin-right 10px
      }
      .badge{
        line-height 10px
        vertical-align middle
        background #00bfc8
        display inline-block
        border-radius 3px
        padding 2px
        font-size 0;
        i,abbr{
          vertical-align middle
          font-size 10px
          line-height 12px;
        }
        i{
          font-size 16px;
          display inline-block
        }
      }
    };
    p{
      color:#999
      font-size 10px;
    }
    &:after{
      content:'';
      position absolute
      bottom 0px
      left 0
      right 0px
      height 1px
      background #fff
      transform scaleY(0.3)
    }
  }
  .sidebar-content .head .userHead{
    width: 50px; 
    height: 50px;
    border: 1px solid #cfbb8b;
    padding: 1px;
    border-radius: 50%;
  }
  .sidebar-content .head .userHead img{
    border-radius: 50%;
  }
  .sidebar-content .head .myCard{
    position: absolute;
    right: 0;
    top: 0;
    text-align: center;
    margin-top 5px
    i{
      font-size 26px
      line-height 20px;
    }
    p{
      color #fff;
      font-size 10px
    }
  }
  .sidebar-content .menu{
    ul{
      margin-top 40px
    }
    ul>li{
      padding:10px 0
      i{
        margin-right 10px
        vertical-align:middle
        display inline-block
      }
      span{
        vertical-align middle
        font-size 14px
      }
    }
  }
  .sidebar-content .foot{
    position absolute
    bottom 30px
    left 20px
    .setting-wrapper{
      color #999
      i,span{
        display inline-block
        vertical-align middle
        font-size 14px
      }
      i{
        font-size 16px
      }
    }
  }
</style>
