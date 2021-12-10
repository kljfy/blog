<template>
  <div class="nav">
    <div class="nav-content">
      <div class="logo" @click="skipToHome">见川</div>
      <a-menu mode="horizontal">
        <a-sub-menu>
          <template #title>前端</template>
          <a-menu-item key="css" @click="skipToNodejs">css</a-menu-item>
          <a-menu-item key="js">js</a-menu-item>
          <a-menu-item key="vue">vue</a-menu-item>
          <a-menu-item key="react">react</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="nodejs" @click="skipToNodejs"> nodejs </a-menu-item>
        <a-menu-item key="tool"> 工具 </a-menu-item>
        <a-menu-item key="me"> 关于我 </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
// import { AppstoreOutlined, BankOutlined } from '@ant-design/icons-vue'
export default defineComponent({
  name: 'nav',
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

    return {
      skipToNodejs,
      skipToHome
    }
  }
})
</script>
<style lang="scss" scoped>
.nav {
  background-color: #fff;
  box-shadow: -1px -1px 3px 3px #f2f2f2;
  .nav-content {
    margin: 0 auto;
    width: 70%;
    min-width: 1170px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    .logo {
      width: 150px;
      height: 70px;
      text-align: center;
      line-height: 70px;
      font-size: 30px;
      cursor: pointer;
    }
    .ant-menu-horizontal {
      width: 700px;
      line-height: 70px;
      ::v-deep .ant-menu-item,
      ::v-deep .ant-menu-submenu {
        padding: 0 50px;
      }
    }
    .ant-menu {
      font-size: 16px;
    }
  }
}
</style>
