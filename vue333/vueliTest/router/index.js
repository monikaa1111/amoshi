import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import  page from '@/components/page'
import Work from '@/components/work'
import frist from '@/components/frist'


const User={
  template:
  `<div>
  <h3><font color="green">我是父组件{{$route.params.id}}</font></h3>
  <router-view/>
  </div>`
}
const profile={
  template:`<div><h3><font color="red">我是Profile子组件 </font></h3></div>`
}
const Posts = {
  template: `<div><h3><font color="green">我是posts组件 </font></h3></div>`
}
const NotFount={
  template:`<div><h3><font color="green">访问的页面不存在 </font></h3></div>`
}
Vue.use(Router)

export default new Router({
  mode:'history',
  linkExactActiveClass: 'nav',
  routes: [
    {
      path: '/',
      redirect:"/page"
      // name: 'HelloWorld',
      // component: HelloWorld
    },
    {
      path:'/page',
      name:"page",
      component:page,
    },
    {
      path: "/work",
      name: "Work",
      component: Work
  },
  {
    path: "/frist/:id",
    name: "frist",
    component: frist
},
{
  path: "/user/:id",
  name: "User",
  component: User,
  children:[
    // {
    //       path: 'profile',
    //       name: "Profile",
    //       component: Profile,
    // },
    {
      path: '',
      name: "profile",
      component: profile,
    },
   {
      path: '/posts',
      name: "Posts",
      component: Posts,
  }
  ]
},
// {
//   // path:'*',
// //  component:NotFount,
// // redirect:(to)=>{
// //   console.log(to);
// //   if(to.path==="/aaa"){
// //     return "/paga"
// //   }else if(to.path==="/bbb"){
// //     return "/work"
// //   }else{
// //     return '/'
// //   }
// // }
// }
  ]
})