<template>
    <footer class="footer" style="padding:0%;position: fixed;bottom: 0;width: 100%;">
      <div class="tabs is-toggle is-fullwidth ">
          <ul>
              <li>
              <router-link to="/">
                  <span class="icon"><i class="fa fa-motorcycle"></i></span>
              </router-link>
              </li>
              <li>
              <router-link to="/looking">
                  <span class="icon">『尋』</span>
              </router-link>
              </li>
              <li>
              <router-link to="/newpost">
                  <span class="icon"><i class="fa fa-pencil"></i></span>
              </router-link>
              </li>
              <li>
              <router-link to="/track">
                  <span class="icon"><i class="fa fa-road"></i></span>
              </router-link>
              </li>
              <li class="is-active">
              <router-link to="/mine">
                  <span class="icon"><i class="fa fa-user-circle"></i></span>
              </router-link>
              </li>
          </ul>
      </div>
  </footer>
</template>
