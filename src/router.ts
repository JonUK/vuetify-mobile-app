import Vue from 'vue';
import Router from 'vue-router';

import TopStories from './views/TopStories.vue';
import CodeExamples from './views/CodeExamples.vue';
import MyFavorites from './views/MyFavorites.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'top-stories',
      component: TopStories
    },
    {
      path: '/code-examples',
      name: 'code-examples',
      component: CodeExamples
    },
    {
      path: '/my-favorites',
      name: 'my-favorites',
      component: MyFavorites
    }
  ]
});
