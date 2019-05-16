<template>
  <div class="nav-box">
    <ul>
      <li @click="openDetail" v-for="v in years" v-if="v.year <= nowYear">{{v.year}}</li>
    </ul>
  </div>
</template>

<script>
import data from '../data/data'
export default {
  name: 'LeftNavList',
  data () {
    return {
      years: [],
      nowYear: ''
    }
  },
  mounted: function () {
    let date = new Date()
    this.years = data.years
    this.nowYear = date.getFullYear()
  },
  methods: {
    openDetail () {
      console.log(data)
    }
  }
}
</script>

<style scoped lang="scss">
  .nav-box ul{
    border: 1px solid #eee;
    margin: 10px;
  }
  .nav-box li{
    height: 40px;
    line-height: 40px;
    background: #f8f8ff;
    margin: 10px 5px;
    cursor: pointer;
  }
</style>
