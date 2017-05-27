<template>
  <section class="hero is-warning  is-fullheight">
    <NewPostMain></NewPostMain>
    <NewPostBack></NewPostBack>
  </section>
</template>

<script>
import NewPostMain from './NewpostMain'
import NewPostBack from './NewpostBack'
export default {
  components: {
    NewPostMain,
    NewPostBack
  }
}
</script>
