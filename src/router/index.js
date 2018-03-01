import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BlackJack from '@/components/BlackJack'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlackJack',
      component: BlackJack
    },
  ]
})
