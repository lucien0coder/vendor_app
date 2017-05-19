<template>
    <footer class="footer" style="padding:0%;position: fixed;bottom: 0;width: 100%;">
      <div class="tabs is-toggle is-fullwidth ">
          <ul>
              <li v-bind:class="{'is-active': f_isActive}">
              <router-link to="/">
                  <span class="icon"><i class="fa fa-motorcycle"></i></span>
              </router-link>
              </li>
              <li v-bind:class="{'is-active': l_isActive}">
              <router-link to="/looking">
                  <span class="icon">『尋』</span>
              </router-link>
              </li>
              <li v-bind:class="{'is-active': n_isActive}">
              <router-link to="/newpost">
                  <span class="icon"><i class="fa fa-pencil"></i></span>
              </router-link>
              </li>
              <li v-bind:class="{'is-active': t_isActive}">
              <router-link to="/track">
                  <span class="icon"><i class="fa fa-road"></i></span>
              </router-link>
              </li>
              <li v-bind:class="{'is-active': m_isActive}">
              <router-link to="/mine">
                  <span class="icon"><i class="fa fa-user-circle"></i></span>
              </router-link>
              </li>
          </ul>
      </div>
  </footer>
</template>
<script>
export default {
  data () {
    return {
      f_isActive: true,
      l_isActive: false,
      n_isActive: false,
      t_isActive: false,
      m_isActive: false
    }
  }
}
</script>
