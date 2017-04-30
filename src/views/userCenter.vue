<template>
  <div>
    <div class="user-head">
      <div class="area-control">
        <label @click="popupVisible=true"><span>{{currentArea}}</span><i class="iconfont icon-iconxl"></i></label>
      </div>
    </div>
    <mt-popup
      v-model="popupVisible"
      position="bottom"
      class="area-wrapper"
      data-slideout-ignore
      >
        <mt-picker :slots="slots" :showToolbar="true" :visibleItemCount="3" :itemHeight="50" @change="onValuesChange" class="picker-wrapper">
          <mt-header>
            <mt-button slot="left" @click.native="popupVisible=false">取消</mt-button>
            <mt-button slot="right" @click.native="confirm">确定</mt-button>
          </mt-header>
        </mt-picker>
    </mt-popup>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        popupVisible:false,
        slots:[
          {
            values:['艾欧尼亚','祖安','战争学院','黑色玫瑰','守望之海','征服之海','影流'],
            className:'picker-list'
          }
        ],
        currentArea:'艾欧尼亚'
      }
    },
    methods:{
      onValuesChange(picker,values){
        this.selArea=values[0];
      },
      confirm(){
        this.popupVisible=false;
        this.currentArea=this.selArea;
      }
    }
  }
</script>
<style lang="stylus">
  .user-head{
    position fixed;
    height 40px;
    left 40px;
    right 40px;
    z-index 1001;
  }
  .area-control{
    color #d3bf8d;
    height 100%;
    display flex
    justify-content:center;
    align-items:center;
    label{
      padding 5px
      span{
        vertical-align middle
        display inline-block
        font-size 14px;
      }
      i{
        display inline-block
        margin-left 5px
        vertical-align middle
        margin-top -2px
      }
    }
    
  }
  .area-wrapper{
    width:100%;
  }
  .picker-list{
    width:100%;
  }
  .mint-header{
    background: url('../assets/header.png') no-repeat center;
    background-size: cover;
  }
  .mint-header .mint-button{
    color #d3bf8d
  }
</style>