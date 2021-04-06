<template>
  <div class="nearby">
      <h3 class="nearby_title">附近店铺</h3>
      <div class="nearby_items">
        <div class="nearby_item">
          <img class="item_img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="" />
          <div class="item_info">
            <div class="item_name">沃尔玛</div>
            <div class="item_tags">
              <div class="item_tag">月售1万+</div>
              <div class="item_tag">起送¥0</div>
              <div class="item_tag">基础运费¥5</div>
            </div>
            <div class="item_highlight">VIP尊享满89元减4元运费券（每月3张）</div>
          </div>
        </div>
        <div class="nearby_item">
          <img class="item_img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="" />
          <div class="item_info">
            <div class="item_name">沃尔玛</div>
            <div class="item_tags">
              <div class="item_tag">月售1万+</div>
              <div class="item_tag">起送¥0</div>
              <div class="item_tag">基础运费¥5</div>
            </div>
            <div class="item_highlight">VIP尊享满89元减4元运费券（每月3张）</div>
          </div>
        </div>
        <div class="nearby_item">
          <img class="item_img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="" />
          <div class="item_info">
            <div class="item_name">沃尔玛</div>
            <div class="item_tags">
              <div class="item_tag">月售1万+</div>
              <div class="item_tag">起送¥0</div>
              <div class="item_tag">基础运费¥5</div>
            </div>
            <div class="item_highlight">VIP尊享满89元减4元运费券（每月3张）</div>
          </div>
        </div>
        <div class="nearby_item">
          <img class="item_img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="" />
          <div class="item_info">
            <div class="item_name">沃尔玛</div>
            <div class="item_tags">
              <div class="item_tag">月售1万+</div>
              <div class="item_tag">起送¥0</div>
              <div class="item_tag">基础运费¥5</div>
            </div>
            <div class="item_highlight">VIP尊享满89元减4元运费券（每月3张）</div>
          </div>
        </div>
        <div class="nearby_item">
          <img class="item_img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="" />
          <div class="item_info">
            <div class="item_name">沃尔玛</div>
            <div class="item_tags">
              <div class="item_tag">月售1万+</div>
              <div class="item_tag">起送¥0</div>
              <div class="item_tag">基础运费¥5</div>
            </div>
            <div class="item_highlight">VIP尊享满89元减4元运费券（每月3张）</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Nearby'
}
</script>

<style lang="scss">
@import "../../styles/variables.scss";
.nearby{
    margin-bottom: .16rem;
    color: $content-fontcolor;
    &_title{
      font-size: .18rem;
      margin-bottom: .14rem;
    }
    .nearby_items{
      & .nearby_item:last-child{
        margin-bottom: 0;
      }
      .nearby_item{
        display: flex;
        margin-bottom: .12rem;
        .item_img{
          width: .56rem;
          height: .56rem;
        }
        .item_info{
          flex: 1;
          margin-left: .16rem;
          border-bottom: 1px $content-bgColor solid;
          .item_name{
            font-size: .16rem;
            margin-bottom: .08rem;
          }
          .item_tags{
            display: flex;
            margin-bottom: .08rem;
            font-size: .13rem;
            .item_tag{
              margin-right: .16rem;
            }
          }
          .item_highlight{
            color: #E93B3B;
            font-size: .13rem;
            margin-bottom: .12rem;
          }
        }
      }
    }
  }
</style>
