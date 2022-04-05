<template>
  <div id="app">
	<el-container>
	<el-header>
		<el-row>
			<el-col :span="4">Logo</el-col>
			<el-col :span="14">
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
					<el-menu-item index="1">主页</el-menu-item>
					<el-menu-item index="2">宠物百科</el-menu-item>
				</el-menu>
			</el-col>
			<el-col :span="6">
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
					<el-menu-item index="1">登录</el-menu-item>
					<el-menu-item index="2">注册</el-menu-item>
				</el-menu>
			</el-col>
		</el-row>
		<el-row>
			<nav>
				<router-link to="/">Home</router-link> |
				<router-link to="/about">About</router-link>
			</nav>
		</el-row>
	</el-header>
	<el-main>Main
		<router-view/>
	</el-main>
	<el-footer>Footer</el-footer>
	</el-container>
  </div>
</template>

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
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-footer
{
	
}
</style>
