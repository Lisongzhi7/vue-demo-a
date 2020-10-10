import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Blog from '@/components/blog/Blog'
import AboutMe from '@/components/aboutMe/AboutMe'
import CodeCard from '@/components/codeCard/CodeCard'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/home',
      name: 'Home',
      component: Home
    },{
      path: '/aboutMe',
      name: 'AboutMe',
      component: AboutMe
    },{
      path: '/blog',
      name: 'Blog',
      component: Blog
    },{
      path: '/codeCard',
      name: 'CodeCard',
      component: CodeCard
    },
  ]
})
