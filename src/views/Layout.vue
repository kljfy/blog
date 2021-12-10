<template>
<app-header-nav/>
<!-- 内容容器 -->
<div class="container">
  <!-- 二级路由 -->
  <RouterView />
</div>
<app-footer/>
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
.container {
  width: 100%;
  background-color: pink;
  height: calc(100% - 57px);
  min-width: 1170px;
  position: relative;
}
</style>
