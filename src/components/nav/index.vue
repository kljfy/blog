<template>
  <div class="nav-out">
    <div class="nav-content">
      <div class="logo" @click="skipToHome">见川</div>
      <a-menu mode="horizontal" class="top-menu">
        <a-menu-item key="home" @click="skipToHome">首页</a-menu-item>
        <a-menu-item key="frontEnd" @click="goToArticle">前端</a-menu-item>
        <a-menu-item key="nodejs" @click="skipToNodejs"> nodejs </a-menu-item>
        <a-menu-item key="tool"> 工具 </a-menu-item>
      </a-menu>
      <div class="login-manage" @click="goToAdmin">登录</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
// import { AppstoreOutlined, BankOutlined } from '@ant-design/icons-vue'
export default defineComponent({
  name: 'navOut',
  components: {
    // AppstoreOutlined,
    // BankOutlined
  },
  setup () {
    const router = useRouter() // 获取路由实例

    const skipToNodejs = () => {
      router.push({ name: 'nodejs' })
    }
    const skipToHome = () => {
      router.push({ name: 'home' })
    }
    const goToArticle = () => {
      router.push({ name: 'articleList' })
    }
    const goToAdmin = () => {
      router.push({ name: 'admin' })
    }

    return {
      skipToNodejs,
      skipToHome,
      goToArticle,
      goToAdmin
    }
  }
})
</script>
<style lang="scss" scoped>
.nav-out {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 60px;
  width: 100%;
  background-color: #fff;
  box-shadow: -1px -1px 3px 3px #f2f2f2;
  .nav-content {
    margin: 0 auto;
    width: 70%;
    min-width: 1170px;
    max-width: 1370px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    .logo {
      width: 150px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      font-size: 30px;
      cursor: pointer;
    }
    .ant-menu-horizontal {
      width: 500px;
      line-height: 60px;
      ::v-deep .ant-menu-item,
      ::v-deep .ant-menu-submenu {
        padding: 0 40px;
      }
    }
    .ant-menu {
      font-size: 16px;
    }
    .login-manage {
      width: 40px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      font-size: 16px;
      cursor: pointer;
    }
  }
}
</style>
