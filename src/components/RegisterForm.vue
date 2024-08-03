<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="handleRegister">
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
        <button class="button is-link" type="submit">Register</button>
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

<style scoped></style>
