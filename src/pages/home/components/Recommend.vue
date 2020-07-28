<template>
    <div>
        <p class="recommend-title">热销推荐</p>
        <ul>
            <router-link tag="li" :to="'/detail/' + item.id" class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" />
                <div class="item-info">
                    <p class="item-titl">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-buttom">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default{
  name: 'HomeRecommend',
  props: {
    recommendList: {
      type: Array,
      required: true
    }
  }
}

</script>
<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .recommend-title
        text-align:left
        height.6rem
        line-height:.6rem
        background:#ccc
        text-indent:.2rem
        margin-top:.2rem
    .item
        display:flex
        height:1.9rem
        overflow:hidden
        .item-img
            width:1.7rem
            height:1.7rem
            padding:.1rem
        .item-info
            flex:1
            padding:.1rem
            text-align:left
            min-width:0
            .item-titl
                line-height:.54rem
                font-size:.32rem
                ellipsis()
            .item-desc
                line-height.4rem
                color:#CCC
                ellipsis()
            .item-buttom
                margin-top:.2rem
                background:#ff9300
                padding:0 .1rem
                border-radius:.06rem
                color:#fff
                ellipsis()
</style>
