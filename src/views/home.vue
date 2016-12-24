<template>
  <div>
    <user-head></user-head>
    <div class="page-tabbar">
      <div class="page-wrap">
        <mt-tab-container class="page-tabbar-container" v-model="selected">
          <mt-tab-container-item id="外卖">
            <News></News>
          </mt-tab-container-item>
          <mt-tab-container-item id="订单">
            <mt-cell v-for="n in 5" :title="'订单 ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="发现">
            <mt-cell v-for="n in 7" :title="'发现 ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="我的">
            <div class="page-part">
              <mt-cell v-for="n in 12" :title="'我的 ' + n" />
            </div>
            <router-link to="/">
              <mt-button type="danger" size="large">退出</mt-button>
            </router-link>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>

      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="外卖">
          <img slot="icon" src="../assets/news.png">
          资讯
        </mt-tab-item>
        <mt-tab-item id="订单">
          <img slot="icon" src="../assets/news.png">
          好友
        </mt-tab-item>
        <mt-tab-item id="发现">
          <img slot="icon" src="../assets/news.png">
          发现
        </mt-tab-item>
        <mt-tab-item id="我的">
          <img slot="icon" src="../assets/news.png">
          我
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
import News from './news.vue'
import userHead from '../components/userHead.vue'
export default {
  name: 'home',
  data () {
    return {
      selected: '外卖'
    }
  },
  methods: {
  },
  components:{
    News,userHead
  }
}
</script>

<style scoped>
.page-tabbar {
    overflow: hidden;
  }
.page-wrap {
  overflow: auto;
  height: 100%;
  padding-bottom: 100px;
}
</style>
