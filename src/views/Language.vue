<template>
  <div>
    <Navbar />
    <section class="section">
      <div v-if="loading">Ładowanie...</div>
      <div v-if="error" class="error">Wystąpił błąd: {{ error }}</div>
      <ul v-if="words.length">
        <li v-for="word in words" :key="word.id">{{ word.word }} -> {{ word.translatedWord }}</li>
      </ul>
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

<style scoped lang="scss">
.error {
  color: red;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  border-collapse: collapse;
  display: grid;
  grid-template-rows: repeat(10, auto);
  grid-auto-flow: column;
  gap: 10px;
  width: 35%;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border: 2px solid #ccc;
    border-radius: 10px;
    background-color: $table-background;

    &:nth-child(even) {
      background-color: $table-background-even; // Parzyste rekordy
    }
  }
}
</style>
