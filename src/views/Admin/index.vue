<template>
  <div class="admin-out">
    <div class="admin-header">
      <div class="header-title">见川</div>
    </div>
    <div class="admin-body">
      <div class="admin-nav">
        <a-menu
          v-model:openKeys="openKeys"
          v-model:selectedKeys="selectedKeys"
          style="width: 256px"
          theme="dark"
          mode="inline"
          @click="handleClick"
        >
          <a-menu-item key="1" @click="goToPage('adminHome')">
            <template #icon>
              <MailOutlined />
            </template>
            主站
          </a-menu-item>
          <a-sub-menu key="2">
            <template #icon>
              <MailOutlined />
            </template>
            <template #title>文章类别</template>
            <a-menu-item key="js">js</a-menu-item>
            <a-menu-item key="css">css</a-menu-item>
            <a-menu-item key="vue">vue</a-menu-item>
          </a-sub-menu>
          <a-menu-item key="3" @click="goToPage('adminNewArticle')">
            <template #icon>
              <MailOutlined />
            </template>
            新建文章
          </a-menu-item>
        </a-menu>
      </div>
      <div class="admin-content">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { MailOutlined } from '@ant-design/icons-vue'

interface MenuInfo {
  key: string
  keyPath: string[]
  item: any
  domEvent: MouseEvent
}
export default defineComponent({
  name: 'admin',
  components: {
    MailOutlined
  },
  setup () {
    const router = useRouter()
    const state = reactive({
      selectedKeys: [],
      openKeys: []
    })
    const handleClick = (e: MenuInfo) => {
      console.log('click ', e)
    }
    const goToPage = (pageName: string) => {
      router.push({ name: pageName })
    }
    return {
      ...toRefs(state),
      handleClick,
      goToPage
    }
  }
})
</script>

<style lang="scss" scoped>
.admin-out {
  min-width: 1170px;
  .admin-header {
    height: 60px;
    border-bottom: 1px solid #ddd;
    .header-title {
      font-size: 24px;
      width: 256px;
      line-height: 60px;
      height: 60px;
      text-align: center;
      color: #fff;
      background-color: #091f3f;
    }
  }
  .admin-body {
    height: calc(100vh - 60px);
    min-height: 500px;
    display: flex;
    justify-content: space-between;
    .admin-nav {
      width: 256px;
      height: 100%;
      ::v-deep .ant-menu {
        height: 100%;
      }
    }
    .admin-content {
      width: calc(100% - 256px);
      overflow: auto;
    }
  }
}
</style>
