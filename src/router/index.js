import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Experience from '../components/Experience'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Experience',
      name: 'Experience',
      component: Experience
    }
  ]
})
