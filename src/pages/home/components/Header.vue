<template>
    <div class="header">
        <div class="header-left"><div class="iconfont back-icon">&#xe624;</div></div>
        <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
        <!-- 导航跳转到城市选择页面 -->
        <router-link to="/city">
          <div class="header-right">{{this.city}}<span class="iconfont arrow-icon">&#xe64a;</span></div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default{
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
// ~@ === src
// 可以在webpack.base.conf.js文件中修改resolve配置项中的alias，来达到目录别名的作用 
    @import '~styles/varibles.styl'
    .header
        display: flex;
        line-height: .86rem;
        height: .86rem;
        background-color: $bgColor;
        color: #fff;
        .header-left
            width: .64rem;
            float: left;
            .back-icon
                text-align:center;
                font-size: .4rem;
        .header-input
            flex: 1;
            height: .64rem
            background: #fff;
            border-radius: .1rem
            margin-top: .12rem;
            margin-left: .2rem;
            color: #ccc;
            line-height: .64rem;
            padding-left: .2rem;
            text-align: left;
        .header-right
            float: right;
            text-align: center;
            color:#fff
            padding:0 .1rem
            .arrow-icon
                font-size:.24rem
</style>
