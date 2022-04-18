<template>
  <div id="app">
	<el-container>
	<el-header>
		<div class="header-left">
			<h1>Animal</h1>
		</div>
		<div class="header-middle">
			<el-menu :default-active="activeIndex" router class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#aaffff" >
				<el-menu-item index="1" route="/">主页</el-menu-item>
				<el-menu-item index="2" route="/animalInfo">宠物百科</el-menu-item>
				<el-menu-item index="3" route="/about">热门资讯</el-menu-item>
				<el-menu-item index="4" route="/AnimalMoments">宠物圈</el-menu-item>
			</el-menu>	
		</div>
		<div class="header-right">
			<el-menu :default-active="activeIndex2" router class="el-menu-demo" mode="horizontal" @select="handleSelect" >
				<el-menu-item  >
					<el-input v-model="input" placeholder="请输入所查内容"></el-input>
				</el-menu-item>
				<el-menu-item index="1" route="/about">登录</el-menu-item>
				<el-menu-item index="2" route="/">注册</el-menu-item>
			</el-menu>	
		</div>
	</el-header>
	<el-main style="padding: 0;">
	<!-- <RouteTitle></RouteTitle> -->
	<router-view/>
	</el-main>
	<el-footer>Footer</el-footer>
	</el-container>
  </div>
</template>

<script>
// import RouteTitle from '@/components/RouteTitle.vue'
	
export default {
	components:{
		// RouteTitle
	},
	methods:{
		handleSelect(key, keyPath) {
		console.log(key, keyPath);
		}
	},
data() {
	return {
  input: '',
  activeIndex:'1',
  activeIndex2:'1',
  
	}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.el-header, .el-footer {
    background-color: #ffffd8;
    color: #333;
    text-align: center;
    line-height: 60px;
	display:flex
  }
.el-main {
 
  text-align: center;
  /* line-height: 160px; */
  margin-left: 200px;
  margin-right: 200px;
}
.el-footer
{
	
}
h1{
	margin: 0;
	font-size: 32px;
	font-weight: 400;
}
body{
	margin: 0;
}

.header-left{
	background-color:#aaffff;
	height:100%;
	width: 15%;
}
.header-middle{
	background-color:#00ff7f;
	height:100%;
	width: 40%;
}
.header-right{
	background-color:#475669;
	height:100%;
	width: 45%;
}
.el-menu-demo{
	margin: 0 auto;
}
</style>
