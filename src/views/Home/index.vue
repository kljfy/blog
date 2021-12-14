<template>
  <div class="home">
    <div class="banner" v-if="false"></div>
    <div class="home-info">
      <RouterView />
      <div class="right-info">
        <div class="user-info">
          <div class="avator-img">
            <img src="../../assets/images/avator.jpg" alt="" />
          </div>
          <div class="person-name">见川</div>
          <ul class="autograph">
            <li>时间从来不是朋友，岁月流逝的底色本来就很冷</li>
          </ul>
        </div>
        <div class="tools">
          <div class="tool-title">
            <span>工具集</span>
            <i>更多></i>
          </div>
          <ul class="tools-list">
            <li @click="goToTool()">房贷计算</li>
            <li @click="goToTool()">json格式转换</li>
            <li @click="goToTool()">正则表达式</li>
            <li @click="goToTool()">数字金额转大写</li>
          </ul>
        </div>
      </div>
    </div>
    <app-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppFooter from '@/components/footer/index.vue'
import { message } from 'ant-design-vue'

export default defineComponent({
  name: 'home',
  components: {
    AppFooter
  },
  setup () {
    const goToTool = () => {
      message.info('正在玩命开发中')
    }

    return {
      goToTool
    }
  }
})
</script>
<style lang="scss" scoped>
.home {
  background-color: #f2f2f2;
  padding-top: 60px;
  .banner {
    height: 400px;
    background-image: url(../../assets/images/banner.jpeg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    box-shadow: -1px -1px 3px 3px #f2f2f2;
  }
  .home-info {
    margin: 0 auto;
    padding: 20px 0;
    width: 70%;
    min-width: 1170px;
    max-width: 1370px;
    display: flex;
    justify-content: space-between;
    .right-info {
      width: 25%;
      .user-info {
        background-color: #fff;
        padding: 30px 20px 20px;
        .avator-img {
          margin: 0 auto;
          height: 100px;
          width: 100px;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .person-name {
          padding: 10px 0;
          text-align: center;
          font-size: 16px;
        }
        .autograph {
          li {
            padding: 5px 0;
            color: #666;
          }
        }
      }
      .tools {
        margin-top: 20px;
        padding-bottom: 20px;
        background-color: #fff;
        .tool-title {
          height: 50px;
          padding: 0 20px;
          border-bottom: 1px solid #f2f2f2;
          line-height: 50px;
          display: flex;
          justify-content: space-between;
          span {
            font-size: 18px;
            cursor: default;
          }
          i {
            font-size: 12px;
            color: #aaa;
            cursor: pointer;
          }
        }
        .tools-list {
          margin-left: 40px;
          li {
            padding-top: 10px;
            list-style: square;
            cursor: pointer;
            &:hover {
              color: #74a1f1
            }
          }
        }
      }
    }
  }
}
</style>
