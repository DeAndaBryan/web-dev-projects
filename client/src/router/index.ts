
import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StatisticsVue from '@/views/Statistics.vue'
import { useSession } from '@/model/session'
import LoginVue from '@/views/Login.vue'
import AdminViewVue from '@/views/AdminView.vue'
import MyActivityVue from '@/views/MyActivity.vue'
import FriendsActivityVue from '@/views/FriendsActivity.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/friends', name: 'friends', component: FriendsActivityVue},
    {path: '/myActivity', name: 'myActivity', component: MyActivityVue},
    {path: '/login', name: 'login', component: LoginVue},
    {path: '/Statistics', name: 'Statistics', component: StatisticsVue},
    {path: '/admin', name: 'admin', component: AdminViewVue},
    {path: '/PRZone', name: 'przone', component: () => import('../views/PRZone.vue')},
    {
      path: '',
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
    },
    {
      path: '/admin/adduser', 
      name: 'add-user', 
      component: () => import('../views/AddUser.vue'), 
      
    },
    {
      path: '/admin/edituser/:id',
      name: 'edit-user',
      component: () => import('../views/AddUser.vue'),
      
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/signup.vue')
    },
  ]
})
function secureAdmin(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  const session = useSession();
  if (session.user?.isAdmin == true) {
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
