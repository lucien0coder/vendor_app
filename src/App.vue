<template>
  <div>
    <section class="hero is-warning  is-fullheight">
      <router-view></router-view>
    </section>
    <footer class="footer" style="padding:0%;position: fixed;bottom: 0;width: 100%;">
      <div class="tabs is-toggle is-fullwidth ">
          <ul>
              <li>
              <a>
                  <span class="icon"><i class="fa fa-motorcycle"></i></span>
              </a>
              </li>
              <li>
              <a>
                  <span class="icon">『尋』</span>
              </a>
              </li>
              <li>
              <a>
                  <span class="icon"><i class="fa  fa-pencil"></i></span>
              </a>
              </li>
              <li>
              <a>
                  <span class="icon"><i class="fa fa-road"></i></span>
              </a>
              </li>
              <li class="is-active">
              <a>
                  <span class="icon"><i class="fa fa-user-circle"></i></span>
              </a>
              </li>
          </ul>
      </div>
  </footer>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">
@import '~bulma'

</style>
