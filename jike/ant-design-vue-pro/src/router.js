import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import RenderRouterView from "./components/RenderRouterView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
  {
    path:'/user',
    component:() => import(/* webpackChunkName: "layout" */ "./views/layouts/UserLayout.vue"),
    children:[
      {
      path:"/user/login",
      name:'login',
      component: ()=>
        import(/* webpackChunkName: "user" */ "./views/User/Login.vue")

    },
    {
      path:"/user/register",
      name:'register',
      component: ()=>
        import(/* webpackChunkName: "user" */ "./views/User/Register.vue")

    }
    ]
  },



    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});