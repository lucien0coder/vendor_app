<template>
    <div class="card" style="margin-bottom: 0.2rem;">
        <div class="is-overlay has-text-centered" style="z-index: 1;margin-top: 20%;">
            <router-link to="/selected" class="button is-warning is-outlined is-medium">
                <span class="icon">
                    <i class="fa fa-map-marker"></i>
                </span>
                &nbsp;&nbsp;&nbsp;{{title}}
            </router-link>
        </div>
        <LocationMark v-if="show_mark"></LocationMark>
        <div class="card-image">
            <figure class="image is-2by1">
            <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
            </figure>
        </div>
    </div>
</template>
<script>
import LocationMark from './LocationMark'

export default {
  components: {
    LocationMark
  },
  data () {
    return {
      show_mark: this.$store.state.show_mark,
      title: '番禺'
    }
  }
}
</script>
