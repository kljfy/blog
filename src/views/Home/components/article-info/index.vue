<template>
  <div class="article-info">
    <div class="txt-content">
      <h3 class="txt-title">XXX的博客_企业类模板分享_律师事务所类型模板</h3>
      <div class="tags">
          <div class="tag-list">
            <calendar-outlined />
            <span class="tag-txt">2021-12-12</span>
          </div>
          <div class="tag-list">
            <folder-open-outlined />
            <span class="tag-txt">vue</span>
          </div>
          <div class="tag-list">
            <eye-outlined />
            <span class="tag-txt">999</span>
          </div>
      </div>
      <md-editor v-model="text" :previewOnly="true" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
  CalendarOutlined,
  EyeOutlined,
  FolderOpenOutlined
} from '@ant-design/icons-vue'
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
export default defineComponent({
  name: 'articleInfo',
  components: {
    CalendarOutlined,
    EyeOutlined,
    FolderOpenOutlined,
    MdEditor
  },
  setup () {
    const text = ref('我是article-info')

    return {
      text
    }
  }
})
</script>

<style lang="scss" scoped>
$tagColor: #999;

.article-info {
  width: 75%;
  padding-right: 20px;
  .txt-content {
    background-color: #fff;
    .txt-title {
      padding: 20px 0;
      text-align: center;
    }
    .tags {
      display: flex;
      justify-content: center;
      .tag-list {
        color: $tagColor;
        .tag-txt {
          padding: 0 20px 0 5px;
        }
      }
    }
  }
}
</style>
