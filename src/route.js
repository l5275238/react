import app from '@/App.js'
import login from 'page/login/login'
import home from 'page/home/home'
function loader(src) {
  return import('./page'+src)
}

const parentRoute=[
  {
    path:"/",
    component:home,
    key:"1",
    mete:{
      name:'首页',
      title:"哈哈"
    }

  },
  {
    path:"/login",
    component:login,
    key:"1",
    mete:{
      name:'首页',
      title:"哈哈"
    }
  }

]
const route=[
  {
    path:"/home",
    component:app,
    key:"1",
    mete:{
      name:'首页',
      title:"哈哈"
    },
    children:[
      {
        path:"/Homehaha",
        component:app,
        key:"11",
        mete:{
          name:'首页',
          title:"哈哈"
        }
      }
    ]

  },
  {
    path:"/home",
    component:app,
    key:"2",
    mete:{
      name:'首页',
      title:"哈哈"
    },

  }



]
export  {route,parentRoute}
