<template>
  <div class="home">
    <div class="list-box">
      <ul>
        <li v-for="v in years" @click="openDetail">{{v.year}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import data from "../data/data"

export default {
  name: 'home',
  data () {
    return {
      years: []
    }
  },
  mounted: function () {
    console.log(data)
  },
  components: {
  }
}
</script>
