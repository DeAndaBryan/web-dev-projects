
import { login } from '@/model/session'
import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StatisticsVue from '@/views/Statistics.vue'
import { useSession } from '@/model/session'
import LoginVue from '@/views/Login.vue'
import AdminViewVue from '@/views/AdminView.vue'
import PeopleSearchVue from '@/views/PeopleSearch.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/login', name: 'login', component: LoginVue},
    {path: '/Statistics', name: 'Statistics', component: StatisticsVue},
    {path: '/admin', name: 'admin', component: AdminViewVue},
    {path: '/people', name: 'people', component: PeopleSearchVue},
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})
function secureAdmin(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  const session = useSession();
  if (session.user?.admin == true) {
    next();
  } else {
    next('/login');
  }
}

function secureRoute(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  const session = useSession();
  if (session.user) {
    next();
  } else {
    next('/login');
  }
}

export default router
