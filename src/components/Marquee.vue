<template>
		<el-carousel indicator-position="outside" height="600px" interval="5000">
			<el-carousel-item v-for="item in imagebox" :key="item.id">
				<img :src="item.idView" height="100%" width="100%">
				<h3>{{item}}</h3>
			</el-carousel-item>
		</el-carousel>
</template>

<script>
export default {
	name:'MarQuee',
	props:{
	},
	data(){
		return {
			imagebox:[{id:0,idView:require('../assets/m1.jpg')},
			{id:1,idView:require('../assets/m2.jpg')},
			{id:2,idView:require('../assets/m3.jpg')},
			],
		}
	},
	methods:{
		
	},
	mounted() {
			}
}
</script>

<style>
	.el-carousel__item {
	font-size: 18px;
	opacity: 0.75;
	line-height: 600px;
	margin: 0;
	}
	.el-carousel{
	line-height: 0rem;
	}
</style>
