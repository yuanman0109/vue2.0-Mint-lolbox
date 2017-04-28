<template>
  <div>
    <l_head :tab="selected" :styles="styles"></l_head>
    <div class="page-tabbar">
      <div class="page-wrap">
        <mt-tab-container class="page-tabbar-container" v-model="selected">
          <mt-tab-container-item id="news">
            <News></News>
          </mt-tab-container-item>
          <mt-tab-container-item id="friends">
            <mt-cell v-for="(n,i) in 5" key="i" :title="'订单 ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="find">
            <mt-cell v-for="(n,i) in 7" key="i" :title="'发现 ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="me">
            <div class="page-part">
              <mt-cell v-for="(n,i) in 12" key="i" :title="'我的 ' + n" />
            </div>
            <router-link to="/">
              <mt-button type="danger" size="large">退出</mt-button>
            </router-link>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>

      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="news">
          <i class="iconfont icon-lanpishu" slot="icon"></i>
          资讯
        </mt-tab-item>
        <mt-tab-item id="friends">
          <i class="iconfont icon-haoyou" slot="icon"></i>
          好友
        </mt-tab-item>
        <mt-tab-item id="find">
          <i class="iconfont icon-faxian" slot="icon"></i>
          发现
        </mt-tab-item>
        <mt-tab-item id="me">
          <i class="iconfont icon-geren" slot="icon"></i>
          我
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
import News from './news.vue'
import l_head from '../components/head.vue'
export default {
  name: 'home',
  data () {
    return {
      selected: 'news',
      styles:{
        background:''
      }
    }
  },
  components:{
    News,l_head
  }
}
</script>

<style scoped>
  .page-tabbar {
      overflow: hidden;
    }
  .page-wrap {
    overflow: auto;
    padding-bottom: 100px;
  }
  .mint-tabbar > .mint-tab-item.is-selected{
    color:#d3bf8d;
    background: none;
  }
  .mint-tab-item-icon > i{
    font-size: 24px;
  }
  
</style>
