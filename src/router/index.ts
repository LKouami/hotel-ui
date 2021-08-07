import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Layout from '../components/layout/layout.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {name:'butler',path: '/', redirect: '/app/butler'},
        
  {
    path: '/app',
    name: 'Layout',
    component: Layout,
    children:[
  
      {
        path: 'butler',
        name: 'Butler',
        component: () => import(/* webpackChunkName: "build" */ '@/pages/butler/butler.vue')
      },
    ]
  },
];

const router = new VueRouter({
  routes,
});

export default router;
