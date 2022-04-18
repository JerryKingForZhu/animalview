<template>
		<el-carousel indicator-position="inside" height="31.25rem"  interval:3000>
			<el-carousel-item v-for="item in imagebox" :key="item.id">
				<img :src="item.idView" height="100%" width="100%">
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
	.el-carousel__item h3{
	font-size: 18px;
	opacity: 0.75;	
	margin: 0;
	}
	.el-carousel{
	line-height: 0rem;
	width: 800px;
	margin: 0 auto;
	}
</style>
