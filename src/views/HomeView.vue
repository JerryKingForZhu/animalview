<template>
  <div class="home">
	<div class="home-header">
		<Marquee/>
		<div class="cardbox">
			<el-card class="head-box-card" >
				<div slot="header" class="clearfix">
				<span>热点快讯</span>
				</div>
				<div v-for="o in 4" :key="o" class="text item">
				{{'列表内容 ' + o }}
				</div>
			</el-card>
			<el-card class="head-box-card" >
				<div slot="header" class="clearfix">
				<span>热点快讯</span>
				</div>
				<div v-for="o in 4" :key="o" class="text item">
				{{'列表内容 ' + o }}
				</div>
			</el-card>
			<el-card class="head-box-card" >
				<div slot="header" class="clearfix">
				<span>热点快讯</span>
				</div>
				<div v-for="o in 4" :key="o" class="text item">
				{{'列表内容 ' + o }}
				</div>
			</el-card>
		</div>
	</div>
	<div class="home-body">
		<div class="home-body-nav">
			<div class="ch2">
				热门帖子 
			</div>
		</div>
		<div class="home-body-middle">
			<div class="middle-left">
				<div class="middle-item">
				<el-card class="middle-box-card">
					waaaaaa
				</el-card>
				</div>
				<div class="middle-item"></div>
				<div class="middle-item"></div>
			</div>
			<div class="middle-right"></div>
		</div>
		<div class="home-body-under">
			<div class="ch2">
				热门帖子 
			</div>
		</div>
	</div>
  </div>
  
</template>

<script>
// @ is an alias to /src
import Marquee from '@/components/Marquee.vue'

export default {
  name: 'HomeView',
  components: {
	Marquee
  }
}
</script>

<style type="text/css">
	.head-box-card{
		width: 100%;
		height: 33.3%;
	}
	.middle-box-card{
		width: 100%;
		height:100%%;
	}
	.home{
		display: flex;
		height: 1600px;
		flex-direction: column;
		justify-content: flex-start;
	}
	.home-header{
		height: 40%;
		width: 99%;
		display: flex;
		justify-content: space-between;
	}
	.home-body{
		background-color: #AAFFFF;
		width: 99%;
		height: 60%;
	}
	.cardbox{
		width: 30%;
		margin:0 auto;
		height: 100%;
	}
	.home-body-nav{
		width: 100%;
		height: 8%;
		justify-content: flex-start;
		display: flex;
		text-align: center;
	}
	.home-body-middle{
		height: 62%;
		background-color: #fff;
		display: flex;
	}
	.home-body-under{
		height: 30%;
		background-color: #fff;
	}
	.ch2{
		height: 100%;
		width: 200px;
		font-size: 22px;
		font-weight: 600;
		line-height: 78.6px;
	}
	.middle-item{
		width: 100%;
		height: 33.3%;
		background-color: #1ddaff;
		display: flex;
		/* border:1px solid #ddd */
		
	}
	.middle-left{
		width: 70%;
	}
	.middle-right{
		width: 30%;
		background-color: #c4ff3a;
	}
</style>