<template>
  <div>
    <div class="friend-tab">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">好友</mt-tab-item>
        <mt-tab-item id="2">消息</mt-tab-item>
      </mt-navbar>
    </div>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        好友
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        xiaoxi
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        selected:'1'
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .friend-tab{
    position:fixed;
    top 0;
    left 35px
    right 35px
    height 40px;
    z-index 1001
    .mint-navbar{
      height 100%;
      width 50%;
      margin 0 auto;
      background none
    }
    .mint-tab-item{
      padding 18px 0 0;
      color: #d3bf8d;
    }
    .mint-tab-item.is-selected{
      border-bottom: none;
      margin: 0;
      color: #fff;
      background: url("../assets/active.png") no-repeat bottom 2px center;
      background-size: 30px;
    }
  }
</style>