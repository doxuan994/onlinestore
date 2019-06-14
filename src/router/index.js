import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/Home'
import Cart from '@/components/pages/Cart'
import ProductDetails from '@/components/product/ProductDetails'

// Admin Components

import Index from '@/components/pages/Admin/Index'
import New from '@/components/pages/Admin/New'
import Products from '@/components/pages/Admin/Products'
import Edit from '@/components/pages/Admin/Edit'





Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/details/:id',
      name: 'ProductDetails',
      component: ProductDetails
    },
    {
      path: '/admin',
      name: 'Admin',

      // Parent routes still has a component
      component: Index,

      // Child routes
      children: [
        {
          path: 'new',
          name: 'New',
          component: New
        },
        {
          path: '',
          name: 'Products',
          component: Products
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit
        }
      ]
    }
  ]
})
