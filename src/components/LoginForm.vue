<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input class="input" type="text" v-model="username" placeholder="Username" />
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" v-model="password" placeholder="Password" />
        </div>
      </div>
      <div class="control">
        <button class="button is-link" type="submit">Login</button>
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
    handleLogin() {
      console.log('Login:', this.username, this.password)
    }
  }
}
</script>

<style scoped></style>
