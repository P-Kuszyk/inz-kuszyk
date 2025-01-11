<template>
  <div>
    <Navbar />

    <!-- Użytkownik niezalogowany -->
    <div v-if="!isAuthenticated" class="notification is-warning">
      Musisz się zalogować, aby uzyskać dostęp do tej strony.
    </div>

    <div v-if="showLogin" class="modal is-active">
      <div class="modal-background" @click="showLogin = false"></div>
      <div class="modal-content">
        <LoginForm />
      </div>
      <button class="modal-close is-large" @click="showLogin = false" aria-label="close"></button>
    </div>

    <!-- Użytkownik zalogowany -->
    <div v-if="isAuthenticated">
      <Banner>
        Rozpocznij naukę słówek od dzisiaj i pozwól, by każdy nowy wyraz otwierał przed Tobą nowe
        możliwości! <br />
        Pamiętaj, że każdy krok w nauce to krok naprzód. <br />
        Regularność i wytrwałość przynoszą najlepsze efekty. Uwierz w siebie i swoje możliwości, bo
        to Ty kształtujesz swoją przyszłość!
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
      <div v-if="savedLanguage && savedLevel" class="notification">
        <p>Wybrany język: {{ savedLanguage }}</p>
        <p>Poziom zaawansowania: {{ savedLevel }}</p>
      </div>
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
      isAuthenticated: true,
      showNotification: true,
      selectedLanguage: '',
      languages: ['Angielski', 'Rumuński', 'Holenderski', 'Francuski'],
      selectedLevel: '',
      levels: ['Początkujący', 'Średnio zaawansowany', 'Zaawansowany'],
      savedLanguage: '',
      savedLevel: ''
    }
  },
  methods: {
    confirmSelection() {
      localStorage.setItem('language', this.selectedLanguage)
      localStorage.setItem('level', this.selectedLevel)

      this.savedLanguage = this.selectedLanguage
      this.savedLevel = this.selectedLevel
    },
    loadSavedData() {
      this.savedLanguage = localStorage.getItem('language') || ''
      this.savedLevel = localStorage.getItem('level') || ''
    },
    checkAuthentication() {
      this.isAuthenticated = true // Czy użytkownik jest zalogowany
    },
    openLoginForm() {
      setTimeout(() => {
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
    this.checkAuthentication()
    if (!this.isAuthenticated) {
      this.openLoginForm()
    }

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
  display: flex;
  flex-direction: column;
  margin: auto;
  border-radius: 25px;
  border: 2px solid #ccc;
  margin-top: 3rem;
  width: 35%;
  align-items: center;
  justify-content: center;
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
  max-width: 500px;
  width: 90%;
  border: 3px solid black;
  border-radius: 15px;
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
