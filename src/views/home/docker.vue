<template>
  <div class="docker">
    <div class="docker_item docker_item-active">
      <div class="iconfont">&#xe6f3;</div>
      <div class="docker_item_title">首页</div>
    </div>
    <div class="docker_item">
      <div class="iconfont">&#xe7e5;</div>
      <div class="docker_item_title">购物车</div>
    </div>
    <div class="docker_item">
      <div class="iconfont">&#xe61e;</div>
      <div class="docker_item_title">订单</div>
    </div>
    <div class="docker_item">
      <div class="iconfont">&#xe660;</div>
      <div class="docker_item_title">我的</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker'
}
</script>

<style lang="scss">
@import "../../styles/variables.scss";
.docker {
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 0.5rem;
  border-top: 1px $content-bgColor solid;
  box-sizing: border-box;
  color: $content-fontcolor;
  background: #fff;

  &_item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-active {
      color: #1fa4fc;
    }
    .iconfont {
      font-size: 0.2rem;
    }
    &_title {
      font-size: 0.1rem;
      margin: 0.02rem 0 0 0;
    }
  }
}
</style>
