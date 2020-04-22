import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [

  {
    path: '/',
    redirect: '/index',
    component: () => import('@/views/common/IndexView.vue'),
    hidden: true,
    name: 'Index',
    meta: {
      title: '首页'
    }
  },

  {
    path: '/index',
    component: () => import('@/views/common/IndexView.vue')
  },

  {
    path: '/explore',
    component: () => import('@/views/common/ExploreView.vue'),
    hidden: true,
    name: 'Explore',
    meta: {
      title: '浏览'
    }
  },

  {
    path: '/nearby',
    component: () => import('@/views/common/NearbyView.vue'),
    hidden: true,
    name: 'Nearby',
    meta: {
      title: '附近'
    }
  },

  {
    path: '/search',
    component: () => import('@/views/common/SearchView.vue'),
    hidden: true,
    name: 'Search',
    meta: {
      title: '专业搜索'
    }
  },

  {
    path: '/my',
    component: () => import('@/views/common/MyView.vue'),
    hidden: true,
    name: 'My',
    meta: {
      title: '个人资料'
    }
  },

  {
    path: '/login',
    component: () => import('@/views/common/LoginView.vue'),
    hidden: true,
    name: 'Login',
    meta: {
      title: '登录'
    }
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/index',
    children: [
      {
        path: 'index',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '主页', icon: 'dashboard' }
      }
    ]
  },

  {
    path: '/personal',
    component: Layout,
    redirect: '/personal/index',
    hidden: true,
    children: [
      {
        path: 'index',
        name: 'Personal',
        component: () => import('@/views/personal/index'),
        meta: { title: '个人信息', icon: 'people' }
      }
    ]
  },

  {
    path: '/user',
    component: Layout,
    name: 'User',
    meta: { title: '用户管理', icon: 'peoples' },
    children: [
      {
        path: 'user-list',
        name: 'UserList',
        component: () => import('@/views/user/UserList'),
        meta: { title: '用户列表', icon: 'table' }
      },
      {
        path: 'create-user',
        name: 'CreateUser',
        component: () => import('@/views/user/create'),
        meta: { title: '创建用户', icon: 'people' }
      },
      {
        path: 'edit-user/:id',
        name: 'EditUser',
        component: () => import('@/views/user/edit'),
        meth: { title: '编辑用户', icon: 'edit', activeMenu: '/user' }
      }
    ]
  },

  {
    path: '/relic',
    component: Layout,
    name: 'Relic',
    meta: { title: '文物管理', icon: 'peoples' },
    children: [
      {
        path: 'relic-list',
        name: 'RelicList',
        component: () => import('@/views/antique/AntiqueList'),
        meta: { title: '文物列表', icon: 'table' }
      },
      {
        path: 'create-relic',
        name: 'CreateRelic',
        component: () => import('@/views/antique/create'),
        meta: { title: '创建文物', icon: 'guide' }
      },
      {
        path: 'edit-relic/:id',
        name: 'EditRelic',
        hidden: true,
        component: () => import('@/views/antique/edit'),
        meta: { title: '编辑文物', icon: 'edit', activeMenu: '/relic' }
      }
    ]
  },

  // {
  //   path: '/article',
  //   component: Layout,
  //   name: 'Article',
  //   meta: { title: '文章管理', icon: 'message' },
  //   children: [
  //     {
  //       path: 'article-list',
  //       name: 'ArticleList',
  //       component: () => import('@/views/news/NewsList'),
  //       meta: { title: '文章列表', icon: 'table' }
  //     },
  //     {
  //       path: 'create-article',
  //       name: 'CreateArticle',
  //       component: () => import('@/views/news/CreateNews'),
  //       meta: { title: '创建文章', icon: 'tab' }
  //     }
  //   ]
  // },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://www.baidu.com',
        meta: { title: '帮助页面', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
