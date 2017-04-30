<template>
  <div>
    <l_head :tab="selected" :styles="styles"></l_head>
    <div class="page-tabbar">
      <div class="page-wrap">
        <mt-tab-container class="page-tabbar-container" v-model="selected">
          <mt-tab-container-item id="news">
            <News @slider="currentSlide"></News>
          </mt-tab-container-item>
          <mt-tab-container-item id="friends" class="friend-wrapper">
            <Friends></Friends>
          </mt-tab-container-item>
          <mt-tab-container-item id="find">
            <mt-cell v-for="(n,i) in 7" key="i" :title="'发现 ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="me">
            <user></user>
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
import Friends from './friends.vue'
import user from './userCenter.vue'
import l_head from '../components/head.vue'
export default {
  name: 'home',
  data () {
    return {
      selected: 'news',
      styles:{
        backgroundImage:'none'
      }
    }
  },
  methods:{
    currentSlide:function(slide){
      this.styles.backgroundImage=slide.banner ? 'url('+slide.banner+')' : 'none';
    }
  },
  components:{
    News,l_head,Friends,user
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
  .friend-wrapper{
    padding-top:40px;
  }
</style>
