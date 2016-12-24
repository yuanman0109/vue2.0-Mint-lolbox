<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item class="slide"><img src="../assets/banner1.png" alt=""></mt-swipe-item>
            <mt-swipe-item class="slide"><img src="../assets/banner2.png" alt=""></mt-swipe-item>
            <mt-swipe-item class="slide"><img src="../assets/banner3.png" alt=""></mt-swipe-item>
            <mt-swipe-item class="slide"><img src="../assets/banner4.png" alt="">3</mt-swipe-item>
        </mt-swipe>
        <div class="page-navbar">
            <mt-navbar class="page-part" v-model="selected">
                <mt-tab-item id="1">最新</mt-tab-item>
                <mt-tab-item id="2">专栏</mt-tab-item>
                <mt-tab-item id="3">娱乐</mt-tab-item>
            </mt-navbar>
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <div class="container">
                        <ul class="notice">
                           <li><img src="../assets/notice1.png" alt=""></li>
                           <li><img src="../assets/notice2.png" alt=""></li>
                        </ul>
                        <ul class="artlist">
                            <li v-for="list in newsData">
                                <router-link to="/article/1">
                                    <div>
                                        <img src="../assets/article.png" alt="artname">
                                    </div>
                                    <div class="li_cont">
                                        <h2 class="t_nowrap">{{list.tit}}</h2>
                                        <p>{{list.describe}}</p>
                                        <p>{{list.uptime}}<span>{{list.readnum}}</span></p>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <mt-cell v-for="n in 4" :title="'测试 ' + n" />
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    <mt-cell v-for="n in 6" :title="'选项 ' + n" />
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>
<script>
export default {
  name: 'news',
  data() {
    return {
      selected: '1',
      newsData:[
          {
              id:1,
              tit:"英雄平安夜，维嘉收到绿帽子？",
              describe:"提莫看着礼物盒里堆积如山的蘑菇发出魔性的笑声：明年大招又有原材料了提莫看着礼物盒里堆积如山的蘑菇发出魔性的笑声：明年大招又有原材料了。",
              uptime:"4小时前",
              readnum:"20万阅"
          },
          {
              id:1,
              tit:"英雄平安夜，维嘉收到绿帽子？",
              describe:"提莫看着礼物盒里堆积如山的蘑菇发出魔性的笑声：明年大招又有原材料了。",
              uptime:"4小时前",
              readnum:"20万阅"
          },
          {
              id:1,
              tit:"英雄平安夜，维嘉收到绿帽子？",
              describe:"提莫看着礼物盒里堆积如山的蘑菇发出魔性的笑声：明年大招又有原材料了。",
              uptime:"4小时前",
              readnum:"20万阅"
          },
          {
              id:1,
              tit:"英雄平安夜，维嘉收到绿帽子？",
              describe:"提莫看着礼物盒里堆积如山的蘑菇发出魔性的笑声：明年大招又有原材料了。",
              uptime:"4小时前",
              readnum:"20万阅"
          },
          {
              id:1,
              tit:"英雄平安夜，维嘉收到绿帽子？",
              describe:"提莫看着礼物盒里堆积如山的蘑菇发出魔性的笑声：明年大招又有原材料了。",
              uptime:"4小时前",
              readnum:"20万阅"
          }
      ]
    };
  }
};
</script>

<style scoped>
    .mint-swipe {
        height: 150px;
        color: #fff;
        font-size: 30px;
        text-align: center;
      }
      .mint-swipe-item {
        line-height: 200px;
      }
      .mint-tab-item-label{
          font-size: 14px;
      }
      .slide img{
        max-width: 100%;
      }
      .mint-navbar .mint-tab-item.is-selected{
        border-bottom: none;
        margin: 0;
        color: #d3bf8d;
        background: url("../assets/active.png") no-repeat bottom 2px center;
        background-size: 40px;
      }
      .container{
          background: #eeeff0;
          padding:5px;
      }
      .notice{
          display: flex;
          margin-bottom: 5px;
      }
      .notice li{
          width: calc(50% - 2px);
      }
      .notice li img{
          vertical-align: top;
      }
      .notice li:first-child{
          margin-right: 4px;
      }
      .artlist{
          margin: 0
      }
      .artlist li{
          padding: 5px;
          margin: 0 0 5px;
          background: #fff;
      }
      .li_cont{
          overflow: hidden
      }
      .artlist li h2{
          font-size: 14px;
          margin:0;
          font-weight: normal;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #727272;
      }
      .artlist li img{
          width: 90px;
          height: 60px;
          margin-right:8px;
          float: left;
      }
      .artlist li p{
        font-size: 12px;
        margin: 0;
        color: #b1b1b1;
        line-height: 16px;
        overflow:hidden; 
        text-overflow:ellipsis;
        display:-webkit-box; 
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2; 
      }
      .artlist li p span{
          color: #d3bf8d;
          margin-left: 5px;
      }
</style>