import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'link-home'
      }
    },
    {
      path: '/love-story',
      name: 'love-story',
      component: () => import('../views/LoveStoryView.vue'),
      meta: {
        title: 'link-story'
      }
    },
    {
      path: '/rsvp',
      name: 'rsvp',
      component: () => import('../views/RSVPView.vue'),
      meta: {
        title: 'link-rsvp'
      }
    },
    {
      path: '/wedding-list',
      name: 'wedding-list',
      component: () => import('../views/WeddingListView.vue'),
      meta: {
        title: 'link-wedding_list'
      }
    },
    {
      path: '/other-information',
      name: 'other-information',
      component: () => import('../views/OtherInformationView.vue'),
      meta: {
        title: 'link-other-information'
      }
    }
  ]
})

export default router
