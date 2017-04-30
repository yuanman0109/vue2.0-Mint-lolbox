<template>
	<div data-slideout-ignore>
		<mt-header title="资讯详情">
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="article-content">
			我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情我是文章详情
		</div>
		<div class="art-footer">
			<div class="comment-wrapper"></div>
			<div class="comment-control">
				<div class="comment-bt">
					<i class="iconfont icon-xiaoxi" ></i>
					<mt-badge size="small" type="error">348</mt-badge>
				</div>
				<i class="iconfont icon-bianji"></i>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		mounted(){
			
		}
	}
</script>
<style lang="stylus" scoped>
	.mint-header{
    background: url('../assets/header.png') no-repeat center;
    background-size: cover;
  }
	.mint-header .mint-header-title {
		color:#d3bf8d;
	}
  .mint-header .mint-button{
    color:#d3bf8d;
  }
	.article-content{
		padding 10px 10px 50px
	}
	.art-footer{
		position fixed;
		bottom 0
		left 0px
		right 0px
		height 40px
		background #f4f4f4
		padding 5px
		display flex 
		align-items:center
	}
	.comment-wrapper{
		flex 1
	}
	.comment-control{
		flex 0 0 auto
		display flex
		i{
			font-size 25px
			color #d3bf8d;
			padding 0 10px
			line-height 40px
		}
	}
	.comment-bt{
		position relative
		.mint-badge{
			position absolute
			right 0
			top 5px
			line-height 12px
			font-size 8px
			padding 1px 2px
			border-radius 4px
		}
	}
</style>