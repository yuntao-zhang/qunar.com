<template>
    <div class="swiper-container">
      <!-- 轮播图 vue-awsome-seiper -->
        <swiper :options="swiperOption">
          <swiper-slide v-for="item of swiperList" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl"/>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default{
  name: 'HomeSwiper',
  props: {
    swiperList: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        speed: 1500
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
// >>> scoped 穿透
    .swiper-container >>> .swiper-pagination-bullet-active
        background :#ffffff
    .swiper-container
        overflow:hidden;
        widtd:100%;
        height:0;
        padding-bottom:31.25%
        backgroundColor: #eee;
        .swiper-img
            width:100%;

</style>
