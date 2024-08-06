<template>
  <div>
    <Navbar />
    <div v-if="!isAuthenticated" class="notification is-warning">
      <button class="delete" @click="closeNotification"></button>
      Musisz się zalogować, aby uzyskać dostęp do tej strony.
    </div>

    <!-- Modal do logowania -->
    <div v-if="showLogin" class="modal is-active">
      <div class="modal-background" @click="showLogin = false"></div>
      <div class="modal-content">
        <div class="box">
          <LoginForm />
        </div>
      </div>
      <button class="modal-close is-large" @click="showLogin = false" aria-label="close"></button>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import LoginForm from '@/components/LoginForm.vue'

export default {
  components: {
    Navbar,
    LoginForm
  },
  data() {
    return {
      showLogin: false,
      isAuthenticated: false, // Do dodania funkcjonalność
      showNotification: true // Czy komunikat o konieczności logowania powinien być wyświetlany
    }
  },
  methods: {
    checkAuthentication() {
      // czy użytkownik jest zalogowany
      this.isAuthenticated = false
    },
    openLoginForm() {
      setTimeout(() => {
        // Opóźnienie do wyświetlenia komunikatu, kiedy użytkownik jest niezalogowany
        if (!this.isAuthenticated) {
          this.showLogin = true
        }
      }, 1000) // Opóźnienie 1 sekunde
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
  }
}
</script>

<style scoped>
.notification {
  margin-bottom: 1rem;
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
