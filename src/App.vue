<template>
  <div id="app">
	<el-container>
	<el-header>
		<div class="header-left">
			<h1>Animal</h1>
		</div>
		<div class="header-middle">
		</div>
		<div class="header-right">
			<el-menu :default-active="activeIndex" router class="el-menu-demo" mode="horizontal" @select="handleSelect">
				<el-menu-item index="1" route="/">主页</el-menu-item>
				<el-menu-item index="2" route="/animalInfo">宠物百科</el-menu-item>
				<el-menu-item index="3" route="/news">热门资讯</el-menu-item>
				<el-menu-item index="4" route="/AnimalMoments">宠物圈</el-menu-item>
				<el-menu-item >
					<el-divider direction="vertical"></el-divider>
				</el-menu-item>
				<el-menu-item index="5" route="/Login" >登录</el-menu-item>
				<el-menu-item index="6" route="/">注册</el-menu-item>
			</el-menu>	
		</div>
	</el-header>
	<el-main style="padding: 0;">
	<router-view/>
	</el-main>
	<el-footer>Footer</el-footer>
	</el-container>
  </div>
</template>

<script>
	
export default {
	components:{
		
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
	background: linear-gradient(#FFFFCC,#CCFFFF);
	display: flex;
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
h1{
	margin: 0;
	font-size: 32px;
	font-weight: 400;
}
body{
	margin: 0;
}

.el-header{
    background-color: #ffffd8;
    color: #333;
    text-align: center;
    line-height: 60px;
	display:flex;
	height: 70px !important;
	padding: 0 !important;
	margin-left: 18.75rem;
	margin-right: 18.75rem;
}
.el-main {
  text-align: center;
  margin-left: 18.75rem;
  margin-right: 18.75rem;
  height: 125rem;
}
.el-footer
{
	background-color: #ffffd8;
	color: #333;
	text-align: center;
	line-height: 60px;
	display:flex;
}

.header-left{
	background-color:#aaffff;
	height:100%;
	width: 15%;
}
.header-middle{
	background-color:#ffffff;
	height:100%;
	width: 35%;
}
.header-right{
	background-color:#475669;
	height:100%;
	width: 50%;
}
.el-menu-demo{
	margin: 0 auto;
	height: 100%;
}
.el-menu-item{
	height: 100% !important;
	line-height: 70px !important;
}
</style>
