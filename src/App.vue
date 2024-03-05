<template>
  <div id="app" :class="{ 'dark-theme': isDarkMode }">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <NavBar :isDarkMode="isDarkMode"></NavBar>
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'App',
  data () {
    return {
      backUrl: ''
    }
  },
  components: { NavBar },
  computed: {
    ...mapState(['isDarkMode'])
  },
  methods: {
    ...mapMutations(['toggleDarkMode'])
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-theme-light;
}

.dark-theme {
  background-color: $bg-color-theme-dark;
  color: $color-theme-dark;
}
// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
