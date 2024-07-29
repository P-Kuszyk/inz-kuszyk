<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="https://bulma.io/assets/brand/Bulma%20Logo%20White.png" width="112" height="28" />
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
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field has-addons">
            <p class="control">
              <input class="input" type="text" placeholder="Wyszukaj..." />
            </p>
            <p class="control">
              <button class="button">Szukaj</button>
            </p>
          </div>
        </div>

        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Zarejestruj się</strong>
            </a>
            <a class="button is-light"> Zaloguj </a>
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

<style scoped>
.navbar {
  background-color: #333;
}

.navbar-item,
.navbar-burger {
  color: white;
}

.navbar-brand img {
  max-height: 3.5rem;
  margin-right: 2rem;
}

.level {
  padding: 1rem;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
}

.level-left,
.level-right {
  display: flex;
  align-items: center;
}

.level-item {
  margin-right: 1rem;
}

.level-item .button {
  margin-left: 0.5rem;
}
</style>
