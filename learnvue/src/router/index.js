import Vue from 'vue'
import Router  from 'vue-router'
import Stark from '@/components/Stark'
import Article from '@/components/Article'

const Study = {template:`<div>this study page</div>`}
const Work = {template:`<div>this work page</div>`}
const About = { template: `<div> 我是About组件 <router-view> </router-view> </div>` };
const Blog = { template:`<div>this Blog page</div>`}
const Info = { template:`<div>this Info page</div>`}
// const User = {
//   template: '<div>User</div>'
// }
import User from '@/components/User'
// const User = {
//   template: '<div>User {{ $route.params.id }}</div>'
// }

Vue.config.productionTip = false
Vue.use(Router)

export default new Router({
  linkActiveClass:'shudong',
  mode:'history',
  // mode:'hash',
  routes:[
    // 动态路径参数 以冒号开头
  { path: '/user/:id?', component: User },
  {
    path:'/',
    name:'hello',
    component:Stark
  },{
    path: '/study',
    name: 'study',
    component: Study 
  },{
    path: '/article/:page?',
      name: 'article',
      component: Article 
  },{
    path: '/work',
    path: '/work',
    name: 'work',
    component: Work 
  },
    {path: '/about',  // 这是一级路由
    component: About,
    children: [{  // 里面是嵌套路由
      path: 'blog',  //如果在这个嵌套
      name: 'blog',
      component: Blog
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    }
    ]}
  ]
})