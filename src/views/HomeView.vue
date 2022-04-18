<template>
  <div class="home">
	<Marquee/>
	<div style="display: flex;" >
		<el-card class="box-card" >
		<div slot="header" class="clearfix">
		<span>卡片名称</span>
		<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>
		<div v-for="o in 4" :key="o" class="text item">
		{{'列表内容 ' + o }}
		</div>
	</el-card>
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
		width: 300px;
	}
</style>