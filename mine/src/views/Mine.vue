<template>
  <div class="mine">
    <div class="list-box years-list">
      <LeftNavList></LeftNavList>
    </div>
    <div class="list-box projects-list">
      <ContentDetail></ContentDetail>
    </div>
  </div>
</template>

<script>
import ContentDetail from '../components/ContentDetail'
import LeftNavList from '../components/LeftNavList'

export default {
  name: 'home',
  data () {
    return {
    }
  },
  mounted: function () {
  },
  methods: {
  },
  components: {
    LeftNavList,
    ContentDetail
  }
}
</script>

<style scoped>
  .mine{
    width: 80vw;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
  }
  .list-box{
    overflow: hidden;
  }
  .years-list{
    width: 20%;
    text-align: center;
    font-size: 20px;
  }
</style>
