import { createRouter, createWebHashHistory } from 'vue-router'
import VMainPage from '@/components/v-main-page.vue'
import VCatalog from '@/components/v-catalog.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: VMainPage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Catalog.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
