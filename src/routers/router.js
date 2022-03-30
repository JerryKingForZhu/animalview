import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
] 

const router = new VueRouter({
    routes // （简写）相当于 routes: routes
  })
  /*导出路由模块*/
  export default router