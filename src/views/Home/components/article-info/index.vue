<template>
  <div class="article-info">
    我是article-info
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'articleInfo',
  components: {
    // EyeOutlined,
    // LikeOutlined
  }
})
</script>

<style lang="scss" scoped>
  .article-info {
    width: 75%;
    padding-right: 20px
  }
</style>
