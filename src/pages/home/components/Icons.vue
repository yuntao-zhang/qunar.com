<template>
    <div class="icons">
      <swiper :options="swiperOption">
        <!-- 二次循环遍历 -->
        <swiper-slide v-for = "(page,index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
            <div class="icon-img">
              <img class="icon-img-content" :src="item.imgUrl" />
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      swiperOption: {

      }
    }
  },
  computed: {
    // 将传过来的数组分割成多个数组，每个数组包含8个内容。
    // 多个数组最终组成一个数组
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
    .icons
        overflow:hidden;
        height:0;
        padding-bottom:50%;
      .icon
        position:relative
        width:25%;
        float:left;
        padding-bottom:25%;
        height:0;
        overflow:hidden;
        .icon-img
          position:absolute
          top:0
          left:0
          right:0
          bottom:.44rem
          box-sizeing:border-box;
          padding:.1rem
          .icon-img-content
            display:block;
            margin:0 auto
            height:100%
        .icon-desc
          position:absolute
          left:0
          right:0
          bottom:0
          height:.44rem
          line-height:.44rem
          text-align:center
          color:$darkTextColor;
          ellipsis()
</style>
