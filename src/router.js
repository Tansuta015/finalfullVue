import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import products from './views/products.vue'
import users from './views/users.vue'
import customers from './views/customers.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'products',
      component: products
    },
    {
      path: '/users',
      name: 'users',
      component: users
    },
    {
      path: '/customers',
      name: 'customers',
      component: customers
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
