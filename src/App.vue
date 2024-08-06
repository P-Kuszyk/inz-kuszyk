<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style scoped lang="scss">
#app {
  background-color: $main-color;
  min-height: 100vh;
  color: $font-color;
}
</style>
