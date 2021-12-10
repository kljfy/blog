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
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="user-info">个人</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.home {
  .banner {
    margin: 20px 0;
    height: 400px;
    background-image: url(../..//assets/images/banner.jpeg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    box-shadow: -1px -1px 1px 1px #ddd;
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
        background-color: #fff;
        .title {
          height: 70px;
          padding: 0 20px;
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
