<template>
  <div id="app">
    <DetilsNav v-if="nav_show"></DetilsNav>
    <section class="hero is-warning  is-fullheight">
      <SearchBar v-if="search_show"></SearchBar>
      <router-view></router-view>
      <NewPostMain v-if="new_post_show"></NewPostMain>
      <NewPostBack v-if="new_post_show"></NewPostBack>
    </section>
    <AllFooter v-if="footer_show"></AllFooter>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar'
import AllFooter from './components/Footer'
import DetilsNav from './components/Nav'
import NewPostMain from './components/views/NewpostMain'
import NewPostBack from './components/views/NewpostBack'

export default {
  name: 'app',
  components: {
    SearchBar,
    AllFooter,
    DetilsNav,
    NewPostMain,
    NewPostBack
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
