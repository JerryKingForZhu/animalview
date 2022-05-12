import Vue from 'vue'
import Vuex from 'vuex'
import jsCookie from "js-cookie"
Vue.use(Vuex)
const state={
     token: '',
     changableNum:0
   };
 const  mutations ={
	setToken(state,val){
		jsCookie.set('token',val)
		console.log('进入set')
	},
	deleteToken(state){
		console.log('进入del')
		state.token = '',
		jsCookie.remove('token')
	},
	getToken(state){
		console.log('进入get')
		state.token = state.token || jsCookie.get('token')
	}
  }

const store = new Vuex.Store({
	state,
	mutations
});
export default store;

