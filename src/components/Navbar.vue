<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="/src/assets/Inz_Logo.png" width="100" height="2000" alt="Logo" />
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
        <router-link class="navbar-item" to="/">Strona główna</router-link>
        <router-link class="navbar-item" to="/new-lesson">Nowa lekcja</router-link>
        <router-link class="navbar-item" to="/language">Słownik</router-link>
        <router-link class="navbar-item" to="/user-panel">Panel użytkownika</router-link>
        <router-link class="navbar-item" to="/note">Notatki</router-link>
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
            <!-- Jeśli jest zalogowany -->
            <template v-if="isAuthenticated"> Witaj Przemek! </template>
            <!-- Jeśli nie jest zalogowany-->
            <template v-else>
              <button class="button is-success" @click="showRegister = true">
                <strong>Zarejestruj się</strong>
              </button>
              <button class="button is-light" @click="showLogin = true">Zaloguj</button>
            </template>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal do logowania -->
    <div v-if="showLogin" class="modal is-active">
      <div class="modal-background" @click="showLogin = false"></div>
      <div class="modal-content">
        <div class="box">
          <LoginForm @login-success="handleLoginSuccess" />
        </div>
      </div>
      <button class="modal-close is-large" @click="showLogin = false" aria-label="close"></button>
    </div>

    <!-- Modal do rejestracji -->
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
      showRegister: false,
      isAuthenticated: true // true = zalogowany | false = niezalogowany
    }
  },
  methods: {
    toggleNavbar() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped lang="scss">
.navbar {
  background-color: $navbar-color;
}

.navbar-item {
  color: $navbar-item;
}
.navbar-burger {
  color: $navbar-item;
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

.field.has-addons {
  .control {
    .input {
      background-color: #d3d3d3;
      border-color: $main-color;
      width: 250px;
      color: black;

      &::placeholder {
        color: black;
      }
    }

    .button {
      color: black;
      background-color: $navbar-item;
      border-color: $main-color;
    }
  }
}
</style>
