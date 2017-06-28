import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import goods from'../components/goods/goods.vue'
import ratings from'../components/ratings/ratings.vue'
import seller from'../components/seller/seller.vue'
Vue.use(Router);
Vue.use(VueResource);
Vue.use(ElementUI)
export default new Router({
	mode:'history',
	scrollBehavior:()=>({
		y:0
	}),
	linkActiveClass:'active',
  routes: [
    {
      path: '/goods',
      component:goods
    },
    {
    	path:'/ratings',
    	component:ratings
    },
    {
    	path:'/seller',
    	component:seller
    },
    {
    	path:'*',
    	redirect:'/goods'
    }
  ]
})
