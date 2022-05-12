<template>
  <div class="home">
			<router-view/>
	</div>
</template>

<script>
// @ is an alias to /src



export default {
  name: 'HomeView',
  components: {
	
  }
}
</script>

<style type="text/css">
	.home{
		display: flex;
		height: 1600px;
		flex-direction: column;
		justify-content: flex-start;
		/* background-color: aqua; */
	}
</style>