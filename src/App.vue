<template>
  <div>
    <section class="hero is-warning  is-fullheight">
      <SearchBar :show="search_show"></SearchBar>
      <router-view></router-view>
    </section>
    <Footer :show="footer_show"></Footer>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    SearchBar,
    Footer
  },
  data () {
    return {
      search_show: true,
      footer_show: true
    }
  }
}
</script>
<style lang="scss">
@import '~bulma'

</style>
