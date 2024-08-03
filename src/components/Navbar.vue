<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img
          src="https://bulma.io/assets/brand/Bulma%20Logo%20White.png"
          width="112"
          height="28"
          alt="Logo"
        />
      </router-link>

      <a
        role="button"
        class="navbar-burger"
        :class="{ 'is-active': isActive }"
        @click="toggleNavbar"
        aria-label="menu"
        aria-expanded="false"
        :data-target="'navbarBasicExample'"
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
            <button class="button is-success" @click="showRegister = true">
              <strong>Zarejestruj się</strong>
            </button>
            <button class="button is-light" @click="showLogin = true">Zaloguj</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showLogin" class="modal is-active">
      <div class="modal-background" @click="showLogin = false"></div>
      <div class="modal-content">
        <div class="box">
          <LoginForm />
        </div>
      </div>
      <button class="modal-close is-large" @click="showLogin = false" aria-label="close"></button>
    </div>

    <div v-if="showRegister" class="modal is-active">
      <div class="modal-background" @click="showRegister = false"></div>
      <div class="modal-content">
        <div class="box">
          <RegisterForm />
        </div>
      </div>
      <button
        class="modal-close is-large"
        @click="showRegister = false"
        aria-label="close"
      ></button>
    </div>
  </nav>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import RegisterForm from '@/components/RegisterForm.vue'

export default {
  components: {
    LoginForm,
    RegisterForm
  },
  data() {
    return {
      isActive: false,
      showLogin: false,
      showRegister: false
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
.modal.is-active {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 10, 10, 0.86);
}

.modal-content {
  position: relative;
  background: white;
  border-radius: 6px;
  padding: 1rem;
  max-width: 500px;
  width: 90%;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
