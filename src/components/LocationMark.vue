<template>
  <div @click="consomark" class="is-overlay has-text-right" style="z-index:1;margin-top:40%;">
    <span class="icon is-medium" >
      <i class="fa fa-bookmark"></i>
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    consomark () {
      console.log(this.$store.state.show_mark)
    }
  }
}
</script>
