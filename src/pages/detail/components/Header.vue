<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont header-abs-backicon">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="showFixed">
            <router-link tag="div" to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>
<script>
export default {
  name: 'DeatilHeader',
  data () {
    return {
      showAbs: true,
      showFixed: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      if (top > 60) {
        this.showAbs = false
        this.showFixed.opacity = top / 140
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    setInterval(() => {
      window.addEventListener('scroll', this.handleScroll)
    }, 100)
  },
  destroy () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header-abs
        position:absolute
        top:.1rem
        left 0.1rem
        height:.7rem
        width:.7rem
        border-radius:50%
        background:rgba(0, 0, 0, .8)
        text-align:center
        .header-abs-backicon
            color:#fff
            line-height:.7rem
    .header-fixed
        position:fixed
        top:0
        left:0
        right: 0
        height:.86rem
        line-height: .86rem
        background:$bgColor
        font-size:.32rem
        color:#fff
        text-align:center
        z-index 9
        .header-fixed-back
            width:.64rem
            text-align:center
            font-size:.4rem
            position:absolute
            top:0
            left:0
            color:#fff
</style>
