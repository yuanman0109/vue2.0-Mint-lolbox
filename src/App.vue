<template>
  <div id="app">
    <transition name="fade">
      <div class="loadingBox" v-if="isloading"></div>
    </transition>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isloading:true
    }
  },
  methods: {
  },
  mounted:function(){
    setTimeout(()=>{
       this.isloading=false;
    },1000)
  },
  components:{
  }
}
</script>

<style>
body{
  margin: 0;
  font-family: "Hiragino Sans GB","华文细黑",STHeiti,"微软雅黑","Microsoft YaHei",SimHei,"Helvetica Neue",Helvetica,Arial,sans-serif!important;
}
#app {
  color: #2c3e50;
}
*{
  box-sizing: border-box;
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
