import { createRouter, createWebHashHistory } from 'vue-router'
import VMainPage from '@/components/v-main-page.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Главная',
      metaTags: [
        {
          name: 'description',
          content: 'The about page of our example app.'
        }
      ]
    },
    component: VMainPage
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'нету'
    },
    component: () => import('../views/About.vue')
  },
  {
    path: '/catalog',
    name: 'Catalog',
    meta: {
      title: 'Каталог'
    },
    component: () => import('../views/Catalog.vue')
  },
  {
    path: '/stand',
    name: 'Stand',
    meta: {
      title: 'Стенды'
    },
    component: () => import('../views/Stand.vue')
  },
  {
    path: '/materials',
    name: 'Materials',
    meta: {
      title: 'Материалы'
    },
    component: () => import('../views/Materials.vue')
  },
  {
    path: '/equipment',
    name: 'Equipment',
    meta: {
      title: 'Материалы'
    },
    component: () => import('../views/Equipment.vue')
  },
  {
    path: '/project',
    name: 'Project',
    meta: {
      title: 'Материалы'
    },
    component: () => import('../views/Project.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  scrollBehavior () {
    document.getElementById('app').scrollIntoView()
    return {
      behavior: 'smooth'
    }
  }
})
export default router
