import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// lazy view
const NotFound = () => import(/* webpackChunkName: "not-found" */ '../views/NotFound.vue')
const fighters = () => import(/* webpackChunkName: "fighters" */ '../views/FightersView.vue')
const fighter = () => import(/* webpackChunkName: "fighter" */ '../views/FighterView.vue')
// json
const allFighters = require('@/assets/peleadores.json')
const oneFighter = id => allFighters.find(fighter => fighter.id == id);

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/fighters',
    name: 'fighters',
    props: { allFighters: allFighters },
    component: fighters
  },
  {
    path: '/fighter/:id',
    name: 'fighter',
    props: route => ({ fighter: oneFighter(route.params.id) }),
    component: fighter
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
