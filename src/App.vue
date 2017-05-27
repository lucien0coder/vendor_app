<template>
  <div id="app">
    <DetilsNav v-if="nav_show"></DetilsNav>
    <router-view></router-view>
    <AllFooter v-if="footer_show"></AllFooter>
  </div>
</template>

<script>
import AllFooter from './components/Footer'
import DetilsNav from './components/Nav'

export default {
  name: 'app',
  components: {
    AllFooter,
    DetilsNav
  },
  computed: {
    search_show: function () {
      let flg = this.$store.state.search_bar_show
      return flg
    },
    footer_show: function () {
      let flg = this.$store.state.footer_nav_show
      return flg
    },
    nav_show: function () {
      let flg = this.$store.state.details_nav_show
      return flg
    },
    new_post_show: function () {
      let flg = this.$store.state.new_post_show
      return flg
    }
  }
}
</script>

<style lang="scss">
@import '~bulma'

</style>
