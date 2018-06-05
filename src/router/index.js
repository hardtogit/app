import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui';
import Configuration   from '../views/Configuration'
import ConfigurationKv from '../views/ConfigurationKv.vue'
import ConfigurationKvPlatForm from '../views/ConfigurationKvPlatForm.vue'
import ConfigurationMq from '../views/ConfigurationMq.vue'
import ConfigurationMqPlatForm from '../views/ConfigurationMqPlatForm.vue'
import ConfigurationMqListen from '../views/ConfigurationMqListen.vue'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Router);
Vue.use(ElementUI);
const router= new Router({
  mode:'history',
  routes: [
    {
      path: '/configuration',
      name: 'Configuration',
      component: Configuration
     },
      {
          path: '/configurationKv',
          name: 'ConfigurationKv',
          component: ConfigurationKv
      },
      {
          path: '/configurationKvPlatForm',
          name: 'ConfigurationKvPlatForm',
          component: ConfigurationKvPlatForm
      },
      {
          path: '/configurationMq',
          name: 'ConfigurationMq',
          component: ConfigurationMq
      },
      {
          path: '/configurationMqPlatForm',
          name: 'ConfigurationMqPlatForm',
          component: ConfigurationMqPlatForm
      },
      {
          path: '/configurationMqListen',
          name: 'ConfigurationMqListen',
          component: ConfigurationMqListen
      },

    {
      path: '/',
      redirect:'/configuration'
    }
  ]
});
export default router
