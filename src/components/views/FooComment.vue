<template>
  <section class="hero is-warning  is-fullheight">
    <SearchBar :show="true"></SearchBar>
    <div class="hero-body">
        <div class="container">
            <Location :show="true"></Location>
            <div class="card" style="margin-bottom: 0.2rem;">
            <div class="card-content">
                <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                    <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-5" @click="intoUserDetails"><strong>
                    <router-link to="/details/user/222">
                      John Smith
                    </router-link>
                    </strong></p>
                    <p class="subtitle is-6">11:09 PM - 1 Jan 2016</p>
                </div>
                </div>
                <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a>#css</a> <router-link to="/details/shop/111"><span @click="intoShopDetails">#location</span></router-link>
                <br>
                </div>
            </div>
            <footer class="card-footer">
                <a class="card-footer-item">
                    <span class="icon is-small"><i class="fa fa-comment-o">2000</i></span>
                </a>
                <a class="card-footer-item">
                    <span class="icon is-small"><i class="fa fa-heart-o">2000</i></span>
                </a>
                <a class="card-footer-item">
                    <span class="icon is-small"><i class="fa fa-star-o">2000</i></span>
                </a>
            </footer>
            </div>

            <div class="card" style="margin-bottom: 0.2rem;">
            <div class="card-content">
                <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                    <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-5"><strong>John Smith</strong></p>
                    <p class="subtitle is-6">11:09 PM - 1 Jan 2016</p>
                </div>
                </div>
                <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a>#css</a> 
                </div>
                <div class="columns">
                    <div class="column is-1">
                        <img src="http://bulma.io/images/placeholders/64x64.png" alt="Image">
                        <img src="http://bulma.io/images/placeholders/64x64.png" alt="Image">
                        <img src="http://bulma.io/images/placeholders/64x64.png" alt="Image">
                        <img src="http://bulma.io/images/placeholders/64x64.png" alt="Image">
                        <img src="http://bulma.io/images/placeholders/64x64.png" alt="Image">
                        <img src="http://bulma.io/images/placeholders/64x64.png" alt="Image">
                        <img src="http://bulma.io/images/placeholders/64x64.png" alt="Image">
                        <br><router-link to="/details/shop/222">#location</router-link to="/details/shop/222">
                    </div>
                </div>
            </div>
            <footer class="card-footer">
                <a class="card-footer-item">
                    <span class="icon is-small"><i class="fa fa-comment-o">2000</i></span>
                </a>
                <a class="card-footer-item">
                    <span class="icon is-small"><i class="fa fa-heart-o">2000</i></span>
                </a>
                <a class="card-footer-item">
                    <span class="icon is-small"><i class="fa fa-star-o">2000</i></span>
                </a>
            </footer>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import SearchBar from '../SearchBar'
import Location from '../Location'

export default {
  components: {
    Location,
    SearchBar
  },
  methods: {
    intoUserDetails () {
      this.showNavBar()
      this.$store.dispatch('CHANGE_DETAILS_NAV_TITLE', '美食家详情')
    },
    intoShopDetails () {
      this.showNavBar()
      this.$store.dispatch('CHANGE_DETAILS_NAV_TITLE', '店铺详情')
    },
    showNavBar () {
      this.$store.dispatch('CHANGE_SEARCH_BAR_SHOW', false)
      this.$store.dispatch('CHANGE_FOOTER_NAV_SHOW', false)
      this.$store.dispatch('CHANGE_DETAILS_NAV_SHOW', true)
    }
  }
}
</script>
