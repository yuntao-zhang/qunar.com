<template>
    <div>
        <detail-banner
         :bannerImg="bannerImg"
         :gallaryImgs="gallaryImgs"
         :sightName="sightName"
        >
        </detail-banner>
        <detail-header>
        </detail-header>
        <div class="content">
          <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import Axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      bannerImg: '',
      gallaryImgs: [],
      sightName: '',
      list: []
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  methods: {
    getInfo () {
      Axios.get('api/detail.json', {
        // 动态路由
        params: {
          id: this.$route.params.id
        }
      }).then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      const Resdata = res.data
      if (Resdata.ret) {
        this.bannerImg = Resdata.data.bannerImg
        this.gallaryImgs = Resdata.data.gallaryImgs
        this.sightName = Resdata.data.sightName
        this.list = Resdata.data.categoryList
      }
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height:50rem
</style>
