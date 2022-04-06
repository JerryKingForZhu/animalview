<template>
  <div id="app">
	<el-container>
	<el-header>
		<h1>Logo</h1>
		<el-menu :default-active="activeIndex" router="true" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="float: right;">
			<el-menu-item  >
				<el-input v-model="input" placeholder="请输入所查内容"></el-input>
			</el-menu-item>
			<el-menu-item index="1" route="/">Home</el-menu-item>
			<el-menu-item index="2" route="/about">About</el-menu-item>
			<el-menu-item index="3" route="/">登录</el-menu-item>
			<el-menu-item index="4" route="/about">注册</el-menu-item>
		</el-menu>
	</el-header>
	<el-main style="padding: 0;">
	<el-carousel indicator-position="outside" height="400px" interval="5000">
		<el-carousel-item v-for="item in 4" :key="item">
		<h3>{{ item }}轮播图</h3>
		</el-carousel-item>
	</el-carousel>
	<router-view/>
	</el-main>
	<el-footer>Footer</el-footer>
	</el-container>
  </div>
</template>

<script>
export default {
data() {
	return {
  input: ''
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
  }
.el-main {
  background-color: #aaffff;
  color: #333;
  text-align: center;
  line-height: 160px;
  margin-left: 200px;
  margin-right: 200px;
}
.el-footer
{
	
}
h1{
	margin: 0;
	float: left;
	font-size: 32px;
	font-weight: 400;
}
body{
	margin: 0;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 400px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #87bf05;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #55aaff;
  }
  .el-carousel{
	line-height: 0rem;
  }
</style>
