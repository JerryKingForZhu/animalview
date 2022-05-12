<template>
  <div id="app">
	<AppHeader/>
	<router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
export default {
	components:{
		AppHeader
	},
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	/* background: linear-gradient(#1dd6ff,#aaaaff); */
}
body{
		margin: 0;
	}
</style>
