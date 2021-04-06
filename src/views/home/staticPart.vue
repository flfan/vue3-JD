<template>
  <div class="position">
    <div class="iconfont position_icon">&#xe619;</div>
    <div class="position_name">
      北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层
    </div>
    <div class="iconfont position_notice">&#xe60b;</div>
  </div>
  <div class="search">
    <div class="iconfont">&#xe62d;</div>
    <div class="search_text">山姆会员商店优惠商品</div>
  </div>
  <div class="banner">
    <img
      class="banner_img"
      src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
      alt="banner"
    />
  </div>
  <div class="icons">
    <div class="icons_item">
      <img
        class="icons_img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
        alt="超市"
      />
      <div class="desc">超市便利</div>
    </div>
    <div class="icons_item">
      <img
        class="icons_img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
        alt="超市"
      />
      <div class="desc">超市便利</div>
    </div>
    <div class="icons_item">
      <img
        class="icons_img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
        alt="超市"
      />
      <div class="desc">超市便利</div>
    </div>
    <div class="icons_item">
      <img
        class="icons_img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
        alt="超市"
      />
      <div class="desc">超市便利</div>
    </div>
    <div class="icons_item">
      <img
        class="icons_img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
        alt="超市"
      />
      <div class="desc">超市便利</div>
    </div>
    <div class="icons_item">
      <img
        class="icons_img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
        alt="超市"
      />
      <div class="desc">超市便利</div>
    </div>
    <div class="icons_item">
      <img
        class="icons_img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
        alt="超市"
      />
      <div class="desc">超市便利</div>
    </div>
    <div class="icons_item">
      <img
        class="icons_img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
        alt="超市"
      />
      <div class="desc">超市便利</div>
    </div>
    <div class="icons_item">
      <img
        class="icons_img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
        alt="超市"
      />
      <div class="desc">超市便利</div>
    </div>
    <div class="icons_item">
      <img
        class="icons_img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
        alt="超市"
      />
      <div class="desc">超市便利</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StaticPart'
}
</script>

<style lang="scss">
@import "../../styles/mixins.scss";
.position {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 0.22rem;
    width: 100%;
    font-size: 0.16rem;
    &_name {
      flex: 1;
      margin-left: 0.085rem;
      font-weight: bold;
      @include ellipsis;
    }
    .iconfont {
      font-size: 0.2rem;
    }
  }
  .search {
    box-sizing: border-box;
    margin-top: 0.16rem;
    height: 0.32rem;
    background: #f5f5f5;
    color: #b7b7b7;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 0.16rem;
    padding: 0.08rem 0.16rem;
    border-radius: 16px;
    &_text {
      margin-left: 0.12rem;
      font-size: 0.14rem;
    }
    .iconfont {
      font-size: 0.22rem;
    }
  }
  .banner {
    margin-top: 0.12rem;
    height: 0;
    overflow: hidden;
    padding-bottom: 25.4%;
    .banner_img {
      width: 100%;
    }
  }
  .icons {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.16rem;
    .icons_item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 20%;
      margin-bottom: 0.16rem;
      .icons_img {
        width: 0.4rem;
        height: 0.4rem;
        margin-bottom: 0.06rem;
      }
    }
  }
</style>
