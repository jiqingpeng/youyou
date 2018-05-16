import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Detail from '@/components/Detail'
import List from '@/components/List'
import Friend from '@/components/Friend'
import GreenHand from '@/components/GreenHand'
import Member from '@/components/Member'
import NameNo from '@/components/NameNo'
import Set from '@/components/Set'
Vue.use(Router)
export default new Router({
	routes: [{
		path: '/',
		component: Home,
		children:[
			{
				path: '/',
				name: 'List',
				name:'List',
				component: List
			},
			{
				path: '/Friend',
				name: 'Friend',
				name:'Friend',
				component: Friend
			},
			{
				path: '/GreenHand',
				name: 'GreenHand',
				name:'GreenHand',
				component: GreenHand
			},
			{
				path: '/Member',
				name: 'Member',
				name:'Member',
				component: Member
			},
			{
				path: '/NameNo',
				name: 'NameNo',
				name:'NameNo',
				component: NameNo
			},
			{
				path: '/Set',
				name: 'Set',
				name:'Set',
				component: Set
			}
		]
	},{
		path: '/Detail',
		name:'Detail',
		component: Detail,
	}]
})