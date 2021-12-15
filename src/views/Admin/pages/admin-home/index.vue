<template>
  <div class="admin-home">
    <div class="header-home">
      <div class="title-left">晚上好，xxx，打一把lol怎么样</div>
      <div class="total-right">
        <div class="txt-total">
          <span>文章数</span>
          <i>99</i>
        </div>
        <div class="border-center"></div>
        <div class="views-total">
          <span>总浏览量</span>
          <i>101</i>
        </div>
      </div>
    </div>
    <div class="body-home">
      <div class="box-left"></div>
      <div class="box-right"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'adminHome'
})
</script>

<style lang="scss" scoped>
.admin-home {
  .header-home {
    padding: 0 40px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    .title-left {
      height: 80px;
      font-size: 20px;
      line-height: 80px;
    }
    .total-right {
      // background-color: orange;
      width: 200px;
      padding-top: 10px;
      height: 80px;
      display: flex;
      justify-content: space-between;
      .border-center {
        border-left: 1px solid #ddd;
      }
      .txt-total, .views-total {
        width: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        span {
          font-size: 14px;
          color: #999;
        }
        i {
          font-size: 18px;
        }
      }
    }
  }
  .body-home {
    padding: 20px;
    height: calc(100vh - 140px);
    background-color: #f2f2f2;
    display: flex;
    justify-content: space-around;
    .box-left, .box-right {
      width: 45%;
      height: 400px;
      background-color: #fff;
    }
  }
}
</style>
