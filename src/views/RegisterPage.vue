<template>
<div class="login-body">
		<el-form
		:model="form"
		validate-on-rule-change
		status-icon
		:rules="rules"
		ref="form"
		label-width="0"
		class="login-container"
		hide-required-asterisk
		>
		<h3 class="login-title">注册</h3>
		<el-form-item
		label="账户"
		label-width="80px"
		prop="loginName"
		>
			<el-input
			type="input"
			v-model="form.loginName"
			autocomplete="off"
			placeholder="请输入账户">
			</el-input>
		</el-form-item>
		<el-form-item
		label="密码"
		label-width="80px"
		prop="password"
		>
			<el-input
			type="password"
			v-model="form.password"
			autocomplete="off"
			placeholder="请输入密码">
			</el-input>
		</el-form-item> 
		<el-form-item
		label="密码"
		label-width="80px"
		prop="password"
		>
			<el-input
			type="password"
			v-model="form.comfirmpassword"
			autocomplete="off"
			placeholder="请再次输入密码">
			</el-input>
		</el-form-item> 
		<el-form-item >
			<el-button type="primary" @click="login" class="login-submit" >登录</el-button>
		</el-form-item>
		<el-form-item>
			<el-button @click="goRegister">注册</el-button>
		</el-form-item>
    </el-form>
  </div>

</template>

<script>
// import Mock from "mockjs"
// import { getMenu} from '../../../src/api/data'
// import { login} from '../../../src/api/login'
export default {
   name: 'RegisterPage',
   data() {
       return {
          loginBg:require('../assets/m2.jpg'),
          form: {
          },
          rules: {
            loginName: [
                  {required: true, message: "请输入用户名", trigger: "blur"},
                  {min: 3, message: "用户名长度不能小于3位", trigger: "blur"}
              ],
              password: [
                  {required: true, message: "请输入密码", trigger: "blur"},
              ]
          },

       }
   },
  // mounted() {
  //   document.querySelector('body').setAttribute('style', 'background-color:red')
  // },
  // beforeDestroy() {
  //   document.querySelector('body').removeAttribute('style')
  // },
  //   进入VUE时首先调用的钩子函数
    mounted () {
      // 添加背景图片
      document.body.style.backgroundSize = '100%'
      document.body.style.backgroundImage = this.loginBg
      document.body.style.backgroundRepeat = 'no-repeat'
    },
    // // 离开VUE时调用的钩子函数
    beforeDestroy() {
      document.body.style.backgroundImage = ''
    },
  methods: {
       login(){
		this.$router.push({name: 'LoginVue'})
       },
		goRegister(){
		if (this.form.password && this.form.password){
				alert("in register");
		// login(this.form).then((res) => {
		//   // this.$store.commit('clearMenu')
		//   // this.$store.commit('setMenu',this.adminMenu)
		//   const token = res.data
		//   this.$store.commit('setToken',token)
		//   // this.$store.commit('addMenu',this.$router)
		//   this.$router.push({name: 'home'})
		// })
		}
		else {
			this.$message.warning("请填写用户名或密码")
		}
      }
   },

}
</script>

<style  scoped>
.login-body{
	text-align: center;
}
.login-container {
	border-radius: 15px; /*圆角*/
	background-clip: padding-box; /*背景被裁剪到内边距框*/
	margin: 180px auto; /*边界 距上180px 左右居中*/
	width: 350px; /*表单宽度*/
	padding: 35px 35px 15px 35px; /*填充*/
	background: #fff;
	border: 1px solid #eaeaea; /*边框*/
	box-shadow: 0 0 25px #cac6c6; /*隐形*/
}

.login-title {
	margin: 0px auto 40px auto; /*上边界0 下边边界40 左右居中*/
	text-align: center; /*上面仅是标签居中 这里是文字居中*/
	color: #505458;
}
.login-submit {
margin: 10px auto 0px auto; /*上边界10 下边边界40 左右居中*/
/* //margin-left: calc((100% - 70px) * 0.5); */
}

</style>
