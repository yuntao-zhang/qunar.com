<template>
    <div>
        <div class="search">
            <input class="search-input" type="text" placeholder="请输入城市或拼音"
              v-model="keyword"
             />
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" v-for="(item,index) of list" :key="index" @click.stop="handleCityClick(item.name)">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="hasList">未匹配到数据</li>
            </ul>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'citySearch',
  props: {
    cities: {
      type: Object,
      requried: true
    }
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasList () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      // 防抖
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        // 搜索关键词，推入result中
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
      this.keyword = ''
    },
    ...mapMutations(['changeCity'])
  }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .search
        height:.72rem
        background:$bgColor
        padding: 0 .1rem
        .search-input
            height.62rem
            line-heigth:.62rem
            width:100%
            text-align:center
            border-radius:.06rem
            color:#666
            padding:0 .1rem
            box-sizing:border-box
    .search-content
        position:absolute
        top:1.59rem
        right:0
        bottom:0
        left:0
        background:#eee
        z-index:1
        overflow:hidden
        .search-item
            line-height:.62rem
            padding-left:.2rem
            color:#666
            background:#fff
</style>
