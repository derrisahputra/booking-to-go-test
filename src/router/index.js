import Vue from 'vue'
import VueRouter from 'vue-router'
import NowPlaying from '@/views/NowPlaying'
import NowPlayingDetail from '@/views/NowPlayingDetail'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/now-playing'
  },
  {
    path: '/now-playing',
    name: 'NowPlaying',
    component: NowPlaying
  },
  {
    path: '/now-playing/:id',
    name: 'NowPlayingDetail',
    component: NowPlayingDetail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
