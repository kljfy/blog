<template>
  <div class="home">
    <div class="banner"></div>
    <div class="home-info">
      <div class="article">
        <div class="new-blog">
          <div class="title">
            <span>最新博文</span>
            <i>更多></i>
          </div>
          <div class="body">
            <ul>
              <li>
                <div class="blog-cover">
                  <img src="" alt="封面" />
                </div>
                <div class="blog-txt">
                  <p class="txt-title">
                    XXX的博客_企业类模板分享_律师事务所类型模板
                  </p>
                  <p class="txt-info">
                    个人博客类模板分享，自适应手机端，电脑端，ipad端，这套模板是完全手工输入的模板，体积很小，代码简洁，css和js文件只有1个，除了jquery文件外，没有引入别的脚本，很适合用于个人博客类，公司信息类的网站。
                  </p>
                  <div class="txt-tip">
                    <span>
                      <eye-outlined />
                    </span>
                    <span>
                      <like-outlined />
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="user-info">个人</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { EyeOutlined, LikeOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  name: 'home',
  components: {
    EyeOutlined,
    LikeOutlined
  }
})
</script>
<style lang="scss" scoped>
.home {
  .banner {
    margin: 20px 0;
    height: 400px;
    background-image: url(../..//assets/images/banner.jpeg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    box-shadow: -1px -1px 3px 3px #f2f2f2;
  }
  .home-info {
    margin: 0 auto;
    width: 70%;
    min-width: 1170px;
    display: flex;
    justify-content: space-between;
    .article {
      width: 70%;
      height: 700px;
      padding-right: 20px;
      .new-blog {
        border: 1px solid #f5f5f5;
        background-color: #fff;
        box-shadow: -1px -1px 5px 1px #f2f2f2;
        .title {
          height: 70px;
          padding: 0 20px;
          border-bottom: 1px solid #f2f2f2;
          span {
            float: left;
            line-height: 70px;
            font-size: 18px;
          }
          i {
            float: right;
            line-height: 70px;
            color: #aaa;
          }
        }
        .body {
          li {
            height: 180px;
            border-bottom: 1px solid #f2f2f2;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            .blog-cover {
              width: 180px;
              height: 135px;
              margin-right: 20px;
              background-color: pink;
              img {
                width: 100%;
                height: 100%;
                background-color: pink;
              }
            }
            .blog-txt {
              flex: auto;
              height: 135px;
              background-color: yellow;
            }
          }
        }
      }
    }
    .user-info {
      width: 30%;
      height: 700px;
      background-color: yellow;
    }
  }
}
</style>
