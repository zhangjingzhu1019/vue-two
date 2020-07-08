<template>
  <div class="home">
    <el-container class="contain">
      <el-header class="header">
        <div>
          <i class="el-icon-cold-drink"></i>
          <span>后台管理系统</span>
        </div>
        <el-button type="info" @click="$router.push('/login')">退出</el-button>
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside">
          <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <i class="el-icon-rank" @click="isCollapse = !isCollapse"></i>
            <el-submenu :index="index+1+''" v-for='(item, index) in routerList' :key='index'>
              <template slot="title">
                <i :class="item.icon"></i>
                <span slot="title">{{ item.title }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item @click='addNav(item, ind)' :index="index+1+'-'+ind+1" v-for='(ite, ind) in item.children' :key='ind'
                  ><i class="el-icon-menu"></i><router-link :to='ite.path'>{{ ite.child }}</router-link></el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main class="main">

          <!-- 面包屑 -->
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{ navObj.title }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ navObj.child }}</el-breadcrumb-item>
          </el-breadcrumb>

         <div class="main_wrap">
            <router-view/>
         </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed:{
    ...mapState(['routerList', 'navObj'])
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    addNav(obj, ind){
      this.$store.commit('addNav',{obj, ind})
    }
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}
.contain {
  height: 100%;
}
.header {
  background: rgb(63, 62, 62);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  i {
    font-size: 20px;
    color: #fff;
  }
  span {
    font-size: 23px;
    margin-left: 10px;
  }
}
.aside {
  background: #545c64;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    /* width: 200px; */
    min-height: 400px;
    a{
      text-decoration: none;
      color: #fff;
    }
  }
  .el-submenu__title {
    line-height: 56px;
  }
  .el-icon-rank{
    width: 100%;
    text-align: center;
    color: #fff;
    line-height: 30px;
  }
}
.main {
  margin: 0;
  padding: 0;
  background: rgb(238, 236, 236);
  .el-breadcrumb {
    height: 40px;
    background: rgb(238, 236, 236);
    font-size: 15px;
    line-height: 40px;
    padding-left: 10px;
  }
  .main_wrap{
    margin: 10px;
    background:#fff;
  }
}
</style>
