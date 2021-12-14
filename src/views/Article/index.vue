<template>
  <div class="article-out">
    我是article
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'articleOut'
})

</script>

<style lang="scss" scoped>
  .article-out {
    padding-top: 70px;
    // margin-top: 70px;
    // height: calc(100% - 90px);
  }
</style>
