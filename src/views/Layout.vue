<template>
  <div class="layout">
    <app-header-nav />
    <!-- 内容容器 -->
    <div class="container">
      <!-- 二级路由 -->
      <RouterView />
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import AppHeaderNav from '@/components/nav/index.vue'

export default defineComponent({
  name: 'app',
  components: {
    AppHeaderNav
  }
})
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  position: relative;
  .container {
    width: 100%;
    // margin-top: 90px;
    min-width: 1170px;
  }
}
</style>
