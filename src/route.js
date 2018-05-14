import app from '@/App.js'


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

  },{
    path:"/home",
    component:app,
    key:"2",
    mete:{
      name:'首页',
      title:"哈哈"
    },

  }



]
export  default  route
