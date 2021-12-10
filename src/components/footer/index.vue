<template>
  <div class="footer">
    <div class="left-img">
      <div class="qq-img">
        <img src="@/assets/images/qq.jpg" alt="qq">
        <span>我的qq</span>
      </div>
      <div class="wx-img">
        <img src="@/assets/images/wx.jpg" alt="wx">
        <span>我的微信</span>
      </div>
    </div>
    <div class="right-txt">
      <p>站点声明：</p>
      <ul>
        <li>1、本站创建的目的以学习交流为基础，记录日常生活中遇到的事物。</li>
        <li>2、本站中所有分享的模板只供个人学习研究使用，未经允许不得用于任何商业目的。</li>
        <li>3、本站所有文章均可转载，请注明出处，欢迎大家看到喜欢的文章帮忙转发点赞。</li>
        <li>Copyright © 2020 保留所有版权</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
  .footer {
    border-top: 10px solid #4a75b9;
    height: 200px;
    padding-top: 30px;
    background-color: #434d54;
    display: flex;
    justify-content: center;
    .left-img {
      width: 250px;
      padding: 0 10px;
      display: flex;
      justify-content: space-around;
      .qq-img, .wx-img {
        width: 100px;
        height: 140px;
        text-align: center;
        img {
          width: 100%;
          height: 100px;
        }
        span {
          color: #ddd;
        }
      }
    }
    .right-txt {
      width: 600px;
      p {
        color: #4a75ba;
      }
      ul {
        color: #ddd;
      }
    }
  }
</style>
