import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Birthday from '../views/Birthday.vue'
import Quiz from '../views/Quiz.vue'
import Scramble from '../views/Scramble.vue'
import Sour from '../views/Sour.vue'
import Top10 from '../views/Top10.vue'
import Videos from '../views/Videos.vue'

const layoutId = document.getElementById('outerwrapper')

if (layoutId) {
  layoutId.scrollTop = 0
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // eslint-disable-next-line no-sparse-arrays
  routes: [
    {
      path: '/',
      name: 'home',
      props: true,
      component: Home,
    },
    {
      path: '/birthday',
      name: 'birthday',
      props: true,
      component: Birthday,
    },
    {
      path: '/quiz',
      name: 'quiz',
      props: true,
      component: Quiz,
    },
    {
      path: '/scramble',
      name: 'scramble',
      props: true,
      component: Scramble,
    },
    {
      path: '/sour',
      name: 'sour',
      props: true,
      component: Sour,
    },
    ,
    {
      path: '/top10',
      name: 'top10',
      props: true,
      component: Top10,
    },
    ,
    {
      path: '/videos',
      name: 'videos',
      props: true,
      component: Videos,
    },
  ],
})

export default router
