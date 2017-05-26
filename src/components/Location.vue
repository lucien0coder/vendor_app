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
        <div :show="show_mark" class="is-overlay has-text-right" style="z-index:1;margin-top:40%;"><span class="icon is-medium"><i class="fa fa-bookmark"></i></span></div>
        <div class="card-image">
            <figure class="image is-2by1">
            <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
            </figure>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      show_mark: true,
      title: this.$store.state.title
    }
  }
}
</script>
