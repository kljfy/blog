<template>
  <div class="article-list">
    <div class="list-info">
      <div class="tab-header-list">
        <a-tabs v-model:activeKey="activeKey">
          <a-tab-pane key="js" tab="Js"></a-tab-pane>
          <a-tab-pane key="css" tab="CSS" force-render
            ></a-tab-pane
          >
          <a-tab-pane key="vue" tab="Vue"></a-tab-pane>
        </a-tabs>
      </div>
      <!-- <div class="list-title">博文</div> -->
      <ul>
        <li>
          <div class="article-list-title" @click="goToArticleInfo">
            最新博文
          </div>
          <div class="article-list-body">
            <div class="article-tags">
              <span class="icon-tag">
                <eye-outlined />
                查看次数:500
              </span>
              <span class="icon-tag">
                <folder-open-outlined />
                标签
              </span>
            </div>
          </div>
        </li>
        <li>
          <div class="article-list-title" @click="goToArticleInfo">
            最新博文
          </div>
          <div class="article-list-body">
            <div class="article-tags">
              <span class="icon-tag">
                <eye-outlined />
                查看次数:500
              </span>
              <span class="icon-tag">
                <folder-open-outlined />
                标签
              </span>
            </div>
          </div>
        </li>
        <li>
          <div class="article-list-title" @click="goToArticleInfo">
            最新博文
          </div>
          <div class="article-list-body">
            <div class="article-tags">
              <span class="icon-tag">
                <eye-outlined />
                查看次数:500
              </span>
              <span class="icon-tag">
                <folder-open-outlined />
                标签
              </span>
            </div>
          </div>
        </li>
        <li>
          <div class="article-list-title" @click="goToArticleInfo">
            最新博文
          </div>
          <div class="article-list-body">
            <div class="article-tags">
              <span class="icon-tag">
                <eye-outlined />
                查看次数:500
              </span>
              <span class="icon-tag">
                <folder-open-outlined />
                标签
              </span>
            </div>
          </div>
        </li>
        <li>
          <div class="article-list-title" @click="goToArticleInfo">
            最新博文
          </div>
          <div class="article-list-body">
            <div class="article-tags">
              <span class="icon-tag">
                <eye-outlined />
                查看次数:500
              </span>
              <span class="icon-tag">
                <folder-open-outlined />
                标签
              </span>
            </div>
          </div>
        </li>
        <li>
          <div class="article-list-title" @click="goToArticleInfo">
            最新博文
          </div>
          <div class="article-list-body">
            <div class="article-tags">
              <span class="icon-tag">
                <eye-outlined />
                查看次数:500
              </span>
              <span class="icon-tag">
                <folder-open-outlined />
                标签
              </span>
            </div>
          </div>
        </li>
        <li>
          <div class="article-list-title" @click="goToArticleInfo">
            最新博文
          </div>
          <div class="article-list-body">
            <div class="article-tags">
              <span class="icon-tag">
                <eye-outlined />
                查看次数:500
              </span>
              <span class="icon-tag">
                <folder-open-outlined />
                标签
              </span>
            </div>
          </div>
        </li>
        <li>
          <div class="article-list-title" @click="goToArticleInfo">
            最新博文
          </div>
          <div class="article-list-body">
            <div class="article-tags">
              <span class="icon-tag">
                <eye-outlined />
                查看次数:500
              </span>
              <span class="icon-tag">
                <folder-open-outlined />
                标签
              </span>
            </div>
          </div>
        </li>
        <li>
          <div class="article-list-title" @click="goToArticleInfo">
            最新博文
          </div>
          <div class="article-list-body">
            <div class="article-tags">
              <span class="icon-tag">
                <eye-outlined />
                查看次数:500
              </span>
              <span class="icon-tag">
                <folder-open-outlined />
                标签
              </span>
            </div>
          </div>
        </li>
      </ul>
      <div class="pagination-bottom-list">
        <a-pagination v-model:current="current" :total="50" show-less-items />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { EyeOutlined, FolderOpenOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'articleList',
  components: {
    EyeOutlined,
    FolderOpenOutlined
  },
  setup () {
    const router = useRouter()
    const goToArticleInfo = () => {
      router.push({
        name: 'articleInfo'
      })
    }
    return {
      current: ref(2),
      goToArticleInfo
    }
  }
})
</script>

<style lang="scss" scoped>
.article-list {
  width: 75%;
  padding-right: 20px;
  .list-info {
    background-color: #fff;
    .tab-header-list {
      padding-left: 20px;
      .ant-tabs-top {
        ::v-deep .ant-tabs-nav {
          margin-bottom: 0;
        }
      }
    }
    // .list-title {
    //   height: 50px;
    //   line-height: 50px;
    //   padding-left: 20px;
    //   font-size: 18px;
    //   border-bottom: 1px solid #f2f2f2;
    // }
    ul {
      li {
        padding-left: 30px;
        height: 80px;
        border-bottom: 1px solid #f2f2f2;
        &:hover {
          box-shadow: 1px 1px 8px 1px #ddd;
        }
        .article-list-title {
          height: 50px;
          line-height: 60px;
          font-size: 16px;
          color: #66a3f8;
          cursor: pointer;
        }
        .article-list-body {
          height: 20px;
          .article-tags {
            color: #aaa;
            .icon-tag {
              padding-right: 15px;
            }
          }
        }
      }
    }
    .pagination-bottom-list {
      height: 70px;
      position: relative;
      .ant-pagination {
        position: absolute;
        top: 20px;
        right: 20px;
      }
    }
  }
}
</style>
