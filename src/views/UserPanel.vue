<template>
  <div>
    <Navbar />

    <!-- Użytkownik niezalogowany -->
    <div v-if="!isAuthenticated" class="notification is-warning">
      <button class="delete" @click="closeNotification"></button>
      Musisz się zalogować, aby uzyskać dostęp do tej strony.
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

    <!-- Użytkownik zalogowany -->
    <div v-if="isAuthenticated">
      <Banner>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Banner>

      <div class="field">
        <label class="label">Wybierz język:</label>
        <div class="control">
          <div class="select">
            <select v-model="selectedLanguage">
              <option v-for="language in languages" :key="language" :value="language">
                {{ language }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Wybierz stopień zaawansowania:</label>
        <div class="select">
          <select v-model="selectedLevel">
            <option v-for="level in levels" :key="level" :value="level">
              {{ level }}
            </option>
          </select>
        </div>
      </div>

      <div class="field">
        <button class="button is-light" @click="confirmSelection">Potwierdź</button>
      </div>
      <Banner>
        <div v-if="savedLanguage && savedLevel" class="notification">
          <p>Wybrany język: {{ savedLanguage }}</p>
          <p>Poziom zaawansowania: {{ savedLevel }}</p>
        </div>
      </Banner>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import LoginForm from '@/components/LoginForm.vue'
import Banner from '@/components/Banner.vue'

export default {
  components: {
    Navbar,
    LoginForm,
    Banner
  },
  data() {
    return {
      showLogin: false,
      isAuthenticated: false, // Czy użytkownik jest zalogowany
      showNotification: true, // Czy komunikat o konieczności logowania powinien być wyświetlany
      selectedLanguage: '',
      languages: ['Angielski', 'Polski', 'Holenderski', 'Francuski'],
      selectedLevel: '',
      levels: ['Początkujący', 'Średnio zaawansowany', 'Zaawansowany'],
      savedLanguage: '',
      savedLevel: ''
    }
  },
  methods: {
    confirmSelection() {
      // Zapisz dane do localStorage
      localStorage.setItem('language', this.selectedLanguage)
      localStorage.setItem('level', this.selectedLevel)

      // Zaktualizuj wyświetlane dane
      this.savedLanguage = this.selectedLanguage
      this.savedLevel = this.selectedLevel
    },
    loadSavedData() {
      // Odczytaj dane z localStorage
      this.savedLanguage = localStorage.getItem('language') || ''
      this.savedLevel = localStorage.getItem('level') || ''
    },
    checkAuthentication() {
      // Zmień tę logikę zgodnie z rzeczywistym mechanizmem autoryzacji
      this.isAuthenticated = true // Zakładając, że użytkownik jest zalogowany
    },
    openLoginForm() {
      setTimeout(() => {
        // Opóźnienie do wyświetlenia komunikatu, jeśli użytkownik jest niezalogowany
        if (!this.isAuthenticated) {
          this.showLogin = true
        }
      }, 1000) // Opóźnienie 1 sekundy
    },
    closeNotification() {
      this.showNotification = false
    }
  },
  mounted() {
    // Sprawdź, czy użytkownik jest zalogowany
    this.checkAuthentication()

    // Otwórz formularz logowania, jeśli użytkownik nie jest zalogowany
    if (!this.isAuthenticated) {
      this.openLoginForm()
    }

    // Załaduj zapisane dane dotyczące języka i poziomu zaawansowania
    this.loadSavedData()
  }
}
</script>

<style scoped lang="scss">
.field {
  width: 15%;
  margin: auto;
  justify-content: center;
  align-items: center;
}
.select {
  width: 100%;
  max-width: 300px;
}
.label {
  margin-top: 2rem;
}
.select select {
  width: 100%;
  padding: 0.4rem;
  border-radius: 4px;
  font-size: 1rem;
  appearance: none;
  background-color: $banner-background;
  color: black;
  border: 2px solid #ccc;
  border-radius: 0.5rem;
}
.banner {
  width: 40%;
  display: flex;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 5rem;
  justify-content: center;
  align-items: center;
}

.button.is-light {
  display: flex;
  margin: auto;
  margin-top: 1rem;
  width: 80%;
}

.notification {
  color: black;
  font-size: 25px;
  background-color: $banner-background;
}

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
  background-color: $login-form;
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
