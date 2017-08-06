import Vue from 'vue';
import Router from 'vue-router';
import Chat from '@/components/Chat';
import Login from '@/components/Login';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/',
      name: 'login',
      component: Login
    }
  ]
})
