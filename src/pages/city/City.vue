<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
    </div>
</template>
<script>
import cityHeader from './components/header.vue'
import citySearch from './components/search.vue'
import cityList from './components/list.vue'
import cityAlphabet from './components/alphabet.vue'
import axios from 'axios'
export default {
  name: 'City',
  data () {
    return {
      cities: {}, //所有城市
      hotCities: [], //热门城市
      city: '', //当前城市
      letter: ''
    }
  },
  components: {
    cityHeader,
    citySearch,
    cityList,
    cityAlphabet
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      const data = res.data.data
      if (res.data.ret) {
        this.cities = data.cities
        this.hotCities = data.hotCities
        this.city = data.city
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>
