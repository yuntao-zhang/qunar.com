<template>
  <div class="List" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="botton-list">
          <button class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </button>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="botton-list">
          <button
            class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
            @click.stop="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </button>
        </div>
      </div>
      <div class="area" v-for="(item,name) of cities" :key="name" :ref="name">
        <div class="title border-topbottom">{{name}}</div>
        <div class="item-list" v-for="item1 of item" :key="item1.id" @click.stop="handleCityClick(item1.name)">
          <div class="item border-bottom">{{item1.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'cityList',
  props: {
    cities: {
      type: Object,
      requried: true
    },
    hotCities: {
      type: Array,
      requried: true
    },
    letter: {
      type: String
    }
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  mounted () {
    // 将整个wrap交给better-scrpll接管
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true
    })
  },
  watch: {
    // 根据传过来的字母滚动到相应的组件位置
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    handleCityClick (city) {
      // this.$store.dispatch('changeCity', city)等于下面直接使用this.changeCity，因为使用了mapMutations
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom {
  &:befor {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:befor {
    border-color: #ccc;
  }
}

.List {
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;

  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .botton-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.33%;
      background: #fff;

      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        border-radius: 0.06rem;
        text-align: center;
        border: 0.02rem solid #ccc;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>
