<template>
	<div>
		<mt-swipe :auto="4000" @change="handleChange">
			<mt-swipe-item class="slide" v-for="(item,index) in slider" key="index"><img :src="item.banner" alt=""></mt-swipe-item>
		</mt-swipe>
		<div class="page-navbar">
			<div id="news-navbar" :class="{'navbar-fixed':isFixed}">
				<mt-navbar class="page-part" v-model="selected" data-slideout-ignore>
					<mt-tab-item id="news" class="news">最新</mt-tab-item>
					<mt-tab-item id="special" class="special">专栏</mt-tab-item>
					<mt-tab-item id="official" class="official">官方</mt-tab-item>
					<mt-tab-item id="activity" class="activity">活动</mt-tab-item>
					<mt-tab-item id="raiders" class="raiders">攻略</mt-tab-item>
					<mt-tab-item id="entertainment" class="entertainment">娱乐</mt-tab-item>
					<mt-tab-item id="collection" class="collection">收藏</mt-tab-item>
				</mt-navbar>
			</div>
			<mt-tab-container v-model="selected" :swipeable="true">
				<mt-tab-container-item id="news">
					<div class="container">
						<ul class="notice">
						   <li><img src="../assets/notice1.png" alt=""></li>
						   <li><img src="../assets/notice2.png" alt=""></li>
						</ul>
						<ul class="artlist">
							<li v-for="(list,index) in newsData" key="index">
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
				<mt-tab-container-item id="special" data-slideout-ignore>
					<mt-cell v-for="(n,i) in 4" key="i" :title="'测试 ' + n" />
				</mt-tab-container-item>
				<mt-tab-container-item id="official" data-slideout-ignore>
					<mt-cell v-for="(n,i) in 6" key="i" :title="'选项 ' + n" />
				</mt-tab-container-item>
				<mt-tab-container-item id="activity" data-slideout-ignore>
					<mt-cell v-for="(n,i) in 6" key="i" :title="'选项 ' + n" />
				</mt-tab-container-item>
				<mt-tab-container-item id="raiders" data-slideout-ignore>
					<mt-cell v-for="(n,i) in 6" key="i" :title="'选项 ' + n" />
				</mt-tab-container-item>
				<mt-tab-container-item id="entertainment" data-slideout-ignore>
					<mt-cell v-for="(n,i) in 6" key="i" :title="'选项 ' + n" />
				</mt-tab-container-item>
				<mt-tab-container-item id="collection" data-slideout-ignore>
					<mt-cell v-for="(n,i) in 6" key="i" :title="'选项 ' + n" />
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'news',
  data() {
		return {
			selected: 'news',
			isFixed:false,
			slider:[
				{
					banner:require('../assets/banner1.png')
				},
				{
					banner:require('../assets/banner2.png')
				},
				{
					banner:require('../assets/banner3.png')
				},
				{
					banner:require('../assets/banner4.png')
				}
			],
			slideIndex:0,
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
  },
  mounted(){
		this.$nextTick(function(){
			this.navbarTop=document.querySelectorAll(".page-part")[0].offsetTop;
			window.addEventListener('scroll', this.onScroll);
			this.scrollNav = new BScroll(document.getElementById('news-navbar'),{
				scrollX:true,
				click:true
			})
		})
  },
	watch:{
		currentNavbar:function(newVal,oldVal){
			let n=newVal.distance,o=oldVal.distance;
			let navbar =  document.querySelectorAll('.page-part')[0];
			let navbarW = navbar.offsetWidth//获取navbar宽度
			let navbarL = -(navbar.getBoundingClientRect().left)//左边超出的长度
			let navbarR = navbar.getBoundingClientRect().right-document.body.offsetWidth//右边超出的长度
			if(n>0){
				if(navbarR>=n){
					this.scrollNav.scrollTo(-(n+navbarL),0,500);
				}else{
					this.scrollNav.scrollTo(-(navbarR+navbarL),0,500);
				}
			}else if(n<0){
				if(-navbarL<=n){
					this.scrollNav.scrollTo(-(navbarL+n),0,500);
				}else{
					this.scrollNav.scrollTo(0,0,500);
				}
			}
		}
	},
	computed:{
		currentNavbar(){
				let navbar = document.querySelectorAll('.'+this.selected)[0];
				if(navbar){
					let clientW = document.body.offsetWidth;//窗口的width
					let navbarL = navbar.getBoundingClientRect().left+(navbar.offsetWidth/2);//距离窗口左边
					let distance = navbarL-clientW/2;//获取元素和中轴线的差值
					let dom = {
						distance:distance
					}
					return dom
				}else{
					return {
						distance:0
					}
				}
		}
	},
  methods: {
		onScroll(){
			let navbarDom = document.querySelectorAll(".page-part")[0];
			let distance = this.navbarTop-window.scrollY;
			if(distance<=40){
				if(!this.isFixed){
					this.$emit('slider',this.slider[this.slideIndex]);
				}
				this.isFixed=true;
			}else{
				if(this.isFixed){
					this.$emit('slider',{banner:''});
				}
				this.isFixed=false;
			}
		},
		handleChange(index) {
			this.slideIndex=index;
		}
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
	.page-part{
		width: 595px;
	}
	.mint-navbar .mint-tab-item{
		padding: 12px 0;
		flex:0 0 auto;
		width: 85px;
	}
	.navbar-fixed{
		position: fixed;
		top: 40px;
		left: 0;
		right: 0;
		background: #fff;
		z-index: 1
	}
	.navbar-fixed+.mint-tab-container{
		padding-top:36px;
	}
	.mint-navbar .mint-tab-item.is-selected{
		border-bottom: none;
		margin: 0;
		color: #d3bf8d;
		background: url("../assets/active.png") no-repeat bottom 3px center;
		background-size: 30px;
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