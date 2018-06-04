import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui';
import HelloWorld from '@/components/HelloWorld'
import Configuration   from '../views/Configuration'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Router);
Vue.use(ElementUI);
const router= new Router({
  mode:'history',
  routes: [
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/configuration',
      name: 'Configuration',
      component: Configuration
     },

    {
      path: '/',
      redirect:'/home'
    }
  ]
});
export default router
