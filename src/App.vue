<template>
  <div>
    <section class="hero is-warning  is-fullheight">
      <SearchBar :show="true"></SearchBar>
      <router-view></router-view>
    </section>
    <Footer :show="true"></Footer>
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
  }
}
</script>

<style lang="scss">
@import '~bulma'

</style>
