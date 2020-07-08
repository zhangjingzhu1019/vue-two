import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routerList: [
      {
        title: '用户管理',
        icon: 'el-icon-user-solid',
        children: [
          {
            child: '用户列表',
            path: '/home/list'
          }
        ]
      },
      {
        title: '权限管理',
        icon: "el-icon-s-flag",
        children: [
          {
            child: '角色列表',
            path: '/home/role'
          },
          {
            child: '权限列表',
            path: '/home/diction'
          }
        ]
      },
      {
        title: '商品管理',
        icon: "el-icon-s-goods",
        children: [
          {
            child: '商品列表',
            path: '/home/commodity'
          },
          {
            child: '分类参数',
            path: '/home/parameter'
          },
          {
            child: '商品分类',
            path: '/home/classify'
          }
        ]
      },
      {
        title: '订单管理',
        icon: "el-icon-s-order",
        children: [
          {
            child: '订单列表',
            path: '/home/order'
          }
        ]
      },
      {
        title: '数据统计',
        icon: "el-icon-s-platform",
        children: [
          {
            child: '数据报表',
            path: '/home/data'
          }
        ]
      }
    ],
    navObj: {
      title: '用户管理',
      child: '用户列表'
    }
  },
  mutations: {
    addNav(state, action){
      state.navObj.title = action.obj.title
      state.navObj.child = action.obj.children[action.ind].child
    }
  },
  actions: {
  },
  modules: {
  }
})
