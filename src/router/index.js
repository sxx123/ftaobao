import Vue from 'vue'
import Router from 'vue-router'
import index from '../maxpage/index'
import shopkind from '../maxpage/shopkind'
import mycenter from '../maxpage/mycenter'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/shopkind',
      name: 'shopkind',
      component: shopkind
    },
    {
      path: '/mycenter',
      name: 'mycenter',
      component: mycenter
    }
  ]
})
