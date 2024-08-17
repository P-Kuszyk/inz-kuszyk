<template>
  <div>
    <Navbar />
    <section class="section">
      <div class="container">
        <h1 class="title">Język</h1>
        <div v-if="loading">Ładowanie...</div>
        <div v-if="error" class="error">Wystąpił błąd: {{ error }}</div>
        <ul v-if="words.length">
          <li v-for="word in words" :key="word.id">{{ word.word }} -> {{ word.translatedWord }}</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'

export default {
  components: {
    Navbar
  },
  data() {
    return {
      words: [],
      loading: true,
      error: null
    }
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:5000/api/words')
      this.words = response.data
    } catch (err) {
      this.error = err.message
    } finally {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
