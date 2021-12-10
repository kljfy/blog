<template>
  <div class="nav">
    <div class="logo">
      Jasper
    </div>
    <a-menu v-model:selectedKeys="current" mode="horizontal">
      <a-menu-item key="home" @click="skipToHome">
        <template #icon>
          <BankOutlined />
        </template>
        首页
      </a-menu-item>
      <a-sub-menu>
        <template #icon>
          <appstore-outlined />
        </template>
        <template #title>前端</template>
          <a-menu-item key="css" @click="skipToNodejs">css</a-menu-item>
          <a-menu-item key="js">js</a-menu-item>
          <a-menu-item key="vue">vue</a-menu-item>
          <a-menu-item key="react">react</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="nodejs" @click="skipToNodejs">
        <template #icon>
          <appstore-outlined />
        </template>
        nodejs
      </a-menu-item>
      <a-menu-item key="tool">
        <template #icon>
          <appstore-outlined />
        </template>
        工具
      </a-menu-item>
    </a-menu>
    <div class="user">
      <img class="avator" src="../../assets/images/avator.jpg" alt="avator" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { AppstoreOutlined, BankOutlined } from '@ant-design/icons-vue'
export default defineComponent({
  name: 'nav',
  components: {
    AppstoreOutlined,
    BankOutlined
  },

  setup (props, context) {
    const router = useRouter() // 获取路由实例
    const current = ref(['home'])

    const skipToNodejs = () => {
      router.push({ name: 'nodejs' })
    }
    const skipToHome = () => {
      router.push({ name: 'home' })
    }

    return {
      current,
      skipToNodejs,
      skipToHome
    }
  }

})
</script>
<style lang="scss" scoped>
.nav {
  width: 100%;
  min-width: 1170px;
  height: 57px;
  display: flex;
  justify-content: space-between;
  .logo {
    width: 150px;
    height: 57px;
    text-align: center;
    line-height: 50px;
    font-size: 30px;
  }
  .ant-menu-horizontal {
    width: 700px;
    line-height: 57px;
    ::v-deep .ant-menu-item, ::v-deep .ant-menu-submenu {
      padding: 0 50px;
    }
  }
  .user {
    width: 200px;
    height: 57px;
    .avator {
      width: 50px;
      height: 50px;
      float: right;
    }
  }
}
</style>
