<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
      </router-link>

      <a
        role="button"
        class="navbar-burger"
        :class="{ 'is-active': isActive }"
        @click="toggleNavbar"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Strona Główna</router-link>
        <router-link class="navbar-item" to="/new-lesson">Nowa Lekcja</router-link>
        <router-link class="navbar-item" to="/language">Język</router-link>
        <router-link class="navbar-item" to="/user-panel">Panel Użytkownika</router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> Więcej </a>

          <div class="navbar-dropdown">
            <a class="navbar-item"> Strona główna </a>
            <a class="navbar-item"> Nowa Lekcja </a>
            <a class="navbar-item"> Język </a>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Panel Użytkownika </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light"> Log in </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleNavbar() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style></style>
