<template>
  <div class="home">
	<div class="home-header">
		<Marquee/>
		<div class="cardbox">
			<el-card class="box-card" >
				<div slot="header" class="clearfix">
				<span>热点快讯</span>
				</div>
				<div v-for="o in 4" :key="o" class="text item">
				{{'列表内容 ' + o }}
				</div>
			</el-card>
			<el-card class="box-card" >
				<div slot="header" class="clearfix">
				<span>热点快讯</span>
				</div>
				<div v-for="o in 4" :key="o" class="text item">
				{{'列表内容 ' + o }}
				</div>
			</el-card>
			<el-card class="box-card" >
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
	.box-card{
		width: 100%;
		height: 33.3%;
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
</style>