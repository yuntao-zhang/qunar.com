<template>
    <div>
      <div class="Banner-container" @click="handleBannerClick">
          <img class="banner-img" :src="bannerImg" />
          <div class="banner-info">
              <div class="banner-title">{{sightName}}</div>
              <div class="banner-number">
                  <span class="iconfont banner-icon">&#xe692;</span>
                  2
              </div>
          </div>
      </div>
      <fade-animation>
        <common-gallary
         :imgs="gallaryImgs"
          v-show="showGallary"
          @close="handleGallaryClose"
        >
      </common-gallary>
      </fade-animation>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/gallary.vue'
import fadeAnimation from 'common/fade/fade.vue'
export default {
  name: 'DetailBanner',
  props: {
    bannerImg: {
      type: String
    },
    gallaryImgs: {
      type: Array
    },
    sightName: {
      type: String
    }
  },
  data () {
    return {
      showGallary: false
    }
  },
  components: {
    CommonGallary,
    fadeAnimation
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
    .Banner-container
        overflow:hidden
        height:0
        padding-bottom:55%
        position:relative
        .banner-img
          width:100%
        .banner-info
            color:#fff
            position:absolute
            display : flex
            left:0
            right:0
            bottom:0
            line-height : .6rem
            background-image:linear-gradient(to top, rgba(0, 0, 0 , 0), rgba(0, 0, 0 , 0.8))
            .banner-title
              flex:1
              font size 0.32rem
              padding:0 .2rem
            .banner-number
              margin-top:.14rem
              padding:0 .4rem
              height: .32rem
              line-height:.32rem
              border-radius:.2rem
              background:rgba(0, 0, 0, .6)
              font-size:.24rem
              .banner-icon
                font-size:.24rem
</style>
