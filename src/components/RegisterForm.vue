<template>
  <div>
    <form @submit.prevent="handleRegister">
      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input class="input" type="text" v-model="username" placeholder="Nazwa użytkownika" />
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" v-model="password" placeholder="Hasło" />
        </div>
      </div>
      <div class="control">
        <button class="buttonSubmit" type="submit">Zarejestruj się</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleRegister() {
      console.log('Register:', this.username, this.password)
    }
  }
}
</script>

<style scoped lang="scss">
.buttonSubmit {
  color: black;
  background-color: $navbar-item;
  border-color: $main-color;
  border-radius: 5px;
  padding: 3px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 150px;
}

div {
  background-color: $secondary-color;
  padding: 10px;
}

input {
  background-color: $input-color;
  border-color: $main-color;

  &:focus {
    border-color: $input-color;
  }
}
</style>
