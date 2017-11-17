import VueRouter from 'vue-router'
import find from '../component/index/find.vue'
import mine from '../component/mine/mine.vue'
import user from '../component/mine/user.vue'
import walk from '../component/mine/walk.vue'
import ask from '../component/mine/ask.vue'
import collect from '../component/mine/collect.vue'
import point from '../component/mine/point.vue'
import set from '../component/mine/set.vue'
import cool from '../component/index/cool.vue'
import strategy from '../component/index/strategy.vue'
import self from '../component/index/self.vue'
import baseline from '../component/index/baseline.vue'
import topic from '../component/topic/topic.vue'
import dry_goods from '../component/dry_goods/dry_goods.vue'
import rank from '../component/dry_goods/rank.vue'
import sort from '../component/dry_goods/sort.vue'
import search from '../component/public/search.vue'
import detail from '../component/dry_goods/detail.vue'
export default new VueRouter({
	routes:[
	//find
	{path:'/find',component:find},
	{path:'/cool',component:cool},
	{path:'/strategy',component:strategy},
	{path:'/self',component:self,name:'n_detail'},
	{path:'/baseline',component:baseline,name:'movement'},
	//topic
	{path:'/topic',component:topic},
	//mine
	{path:'/mine',component:mine},
	{path:'/user',component:user},
	{path:'/walk',component:walk},
	{path:'/ask',component:ask},
	{path:'/collect',component:collect},
	{path:'/point',component:point},
	{path:'/set',component:set},
	//dry_goods
	{path:'/dry_goods',component:dry_goods},
	{path:'/rank',component:rank},
	{path:'/sort',component:sort},
	{path:'/detail',component:detail,name:'detail'},
	//search
	{path:'/search',component:search},
	{path:'*',redirect:'/find'}
	]
})

