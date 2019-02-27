import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'

import ImdbBidirectionalLstm from '../components/models/ImdbBidirectionalLstm'


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/imdb-bidirectional-lstm', component: ImdbBidirectionalLstm }
  ]
})

export default router
