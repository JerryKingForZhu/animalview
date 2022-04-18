<template>
		<el-tabs type="border-card">
			<el-tab-pane label="热门推荐">
				<el-row >
					<el-button type="primary">默认按钮</el-button>
					<el-button type="primary">主要按钮</el-button>
					<el-button type="primary">成功按钮</el-button>
					<el-button type="primary">信息按钮</el-button>
					<el-button type="primary">警告按钮</el-button>
					<el-button type="primary">危险按钮</el-button>
					<el-button type="primary">默认按钮</el-button>
					<el-button type="primary">主要按钮</el-button>
					<el-button type="primary">成功按钮</el-button>
				</el-row>
				<el-divider></el-divider>
				<el-row >
					<el-button type="danger">默认按钮</el-button>
					<el-button type="danger">主要按钮</el-button>
					<el-button type="danger">成功按钮</el-button>
					<el-button type="danger">信息按钮</el-button>
					<el-button type="danger">警告按钮</el-button>
					<el-button type="danger">危险按钮</el-button>
					<el-button type="danger">默认按钮</el-button>
					<el-button type="danger">主要按钮</el-button>
					<el-button type="danger">成功按钮</el-button>
				</el-row>
			</el-tab-pane>
			<el-tab-pane label="配置管理">配置管理</el-tab-pane>
			<el-tab-pane label="角色管理">角色管理</el-tab-pane>
			<el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
			<el-tab-pane label="用户管理">用户管理</el-tab-pane>
			<el-tab-pane label="配置管理">配置管理</el-tab-pane>
			<el-tab-pane label="角色管理">角色管理</el-tab-pane>
			<el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
		</el-tabs>
</template>

<script>
	export default {
		name:'RouteTitle'
	}
</script>

<style>
	.el-tabs{
		height: 12rem;
		margin: 0 auto;
		width: 62.5rem;
	}
</style>
