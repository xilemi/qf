import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home/index.vue'
import headerCom from '../components/headerCom.vue'
import footerCom from '../components/footerCom.vue'

Vue.use(VueRouter)

// 全局






const routes = [
  {
    path: '/',
    name: 'home',
    alias: '/home',
    meta: {
      lable: '首页',
      isBack: false,
      isRequireAuth: false
    },
    components: {
      header: headerCom,
      default: HomeView,
      footer: footerCom
    },
  },
  {
    path: '/list',
    name: 'list',
    components: {
      header: headerCom,
      default: () => import(/* webpackChunkName: "about" */ '../views/list/index'),
      footer: footerCom
    },
    meta: {
      lable: '列表',
      isBack: true,
      isRequireAuth: false
    },
  },
  {
    path: '/detail',
    name: 'ShopDetail',
    components: {
      default: () => import("@/views/detail/index"),
      header: headerCom
    },
    meta: {
      lable: '详情页',
      isBack: true,
      isRequireAuth: true
    },
    beforeEnter: (to, from, next) => {
      console.log(4,to);
      console.log(4,from);
      next()
    }
  },
  {
    path: "/car",
    name: 'car',
    components: {
      default: () => import('@/views/car/index'),
      header: headerCom,
      footer: footerCom
    },
    meta: {
      lable: '购物车',
      isBack: true,
      isRequireAuth: true
    },
  },
  {
    path: '/mine',
    name: 'mine',
    components: {
      default: () => import('@/views/mine/index'),
      header: headerCom
    },
    meta: {
      lable: '我的',
      isBack: true,
      isRequireAuth: false
    },
  },
  {
    path: '/login',
    // name: 'LoginView',
    components: {
      header: headerCom,
      default: () => import('@/views/login/index'),
    },
    children: [
      {
        path: '',
        // name: 'accountLogin',
        redirect: 'account',
        meta: {
          lable: '登录',
          isBack: true,
          isRequireAuth: false
        },
      },
      {
        path: 'account',
        name: 'accountLogin',
        component: () => import('@/views/login/accountLogin'),
        meta: {
          lable: '登录',
          isBack: true,
          isRequireAuth: false
        },
      },
      {
        path: '/login/phone',
        name: 'phoneLogin',
        component: () => import('@/views/login/phoneLogin'),
        meta: {
          lable: '登录',
          isBack: true,
          isRequireAuth: false
        },
      }
    ]
  },
  {
    path: '/notfound',
    name: 'notfound',
    components: {
      default: () => import('@/views/404/notfound'),
      footer: footerCom,
      header: headerCom
    },
    meta: {
      lable: '404',
      isBack: true,
      isRequireAuth: false
    },
  },
  {
    path: '*',
    redirect: function (from) {
      // 这里的信息如何传递到notfound 界面呢
      console.log(from);
      return { path: '/notfound', query: { fromPath: from.params.pathMatch } }
    },
    meta: {
      lable: '404',
      isBack: true,
      isRequireAuth: false
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 全局守卫  路由变化就会触发
router.beforeEach((to, from, next) => {
  console.log('1去哪里', to);
  console.log('1从哪里来', from);
  //可选 去的位置  或者终止
  // 使用to or from获取参数
  if (to.meta.isRequireAuth) {
    let token = localStorage.getItem('token')
    if (token) {
      next()
    }
    else {
      next({path:"/login"})
    }
  } else {
    next()
  }
})
router.beforeResolve((to, from, next) => {
  console.log('2去哪里', to);
  console.log('2从哪里来', from);
  //可选 去的位置  或者终止 解析阶段还可以修改去的位置
  next()
})
//跳转成功时触发
router.afterEach((to, from) => {
  console.log('3去哪里', to);
  console.log('3从哪里来', from);
})





export default router
