<template>
  <div class="layout">
    <app-header-nav />
    <!-- 内容容器 -->
    <div class="container">
      <!-- 二级路由 -->
      <RouterView />
    </div>
  </div>
  <app-footer />
</template>
<script>
import { defineComponent } from 'vue'
import AppHeaderNav from '@/components/nav/index.vue'
import AppFooter from '@/components/footer/index.vue'

export default defineComponent({
  name: 'app',
  components: {
    AppHeaderNav,
    AppFooter
  }
})
</script>

<style lang="scss" scoped>
.layout {
  // border-top: 5px solid #4a75b9;
  background-color: #f2f2f2;
  .container {
    width: 100%;
    margin-top: 70px;
    // height: calc(100% - 57px);
    padding: 20px 0;
    min-width: 1170px;
    position: relative;
  }
}
</style>
