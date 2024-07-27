import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import NewLesson from '@/views/NewLesson.vue'
import Language from '@/views/Language.vue'
import UserPanel from '@/views/UserPanel.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new-lesson',
    name: 'NewLesson',
    component: NewLesson
  },
  {
    path: '/language',
    name: 'Language',
    component: Language
  },
  {
    path: '/user-panel',
    name: 'UserPanel',
    component: UserPanel
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
