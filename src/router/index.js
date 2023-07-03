import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage';
import GamesPage from '@/views/GamesPage';
import GameItemPage from '@/views/GameItemPage';
import CompanyPage from '@/views/CompanyPage';
import TeamsPage from '@/views/TeamsPage';
import UserPage from '@/views/UserPage';
import SignInPage from '@/views/SignInPage';
import SignUpPage from '@/views/SignUpPage';
import GamesFormPage from '@/views/GamesFormPage';
import TeamsFormPage from '@/views/TeamsFormPage';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },

  {
    path: '/games/',
    name: 'games',
    component: GamesPage
  },

  {
    path: '/games/:id',
    name: 'game',
    component: GameItemPage
  },

  {
    path: '/games/create/',
    name: 'gamesForm',
    component: GamesFormPage
  },

  {
    path: '/company/',
    name: 'company',
    component: CompanyPage
  },

  {
    path: '/teams/',
    name: 'teams',
    component: TeamsPage
  },

  {
    path: '/teams/create/',
    name: 'teamsForm',
    component: TeamsFormPage
  },

  {
    path: '/user/',
    name: 'user',
    component: UserPage
  },

  {
    path: '/signin/',
    name: 'signin',
    component: SignInPage
  },
  
  {
    path: '/signup/',
    name: 'signup',
    component: SignUpPage
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
