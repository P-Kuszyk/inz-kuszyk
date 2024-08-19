<template>
  <div>
    <Navbar />
    <section class="section">
      <div v-if="loading">Ładowanie...</div>
      <div v-if="error" class="error">Wystąpił błąd: {{ error }}</div>
      <form v-if="words.length" @submit.prevent="submitTranslations">
        <ul>
          <li v-for="(word, index) in words" :key="word.id">
            <span>{{ word.word }} -> </span>
            <input v-model="translations[index]" type="text" :placeholder="'tłumaczenie...'" />
          </li>
        </ul>
        <button type="submit">Zapisz tłumaczenia</button>
      </form>
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
      translations: [],
      loading: true,
      error: null
    }
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:5000/api/words')
      this.words = response.data
      this.translations = new Array(this.words.length).fill('')
    } catch (err) {
      this.error = err.message
    } finally {
      this.loading = false
    }
  },
  methods: {
    async submitTranslations() {
      try {
        const data = this.words.map((word, index) => ({
          wordId: word.id,
          translation: this.translations[index]
        }))

        // Przykładowe wysłanie danych na backend
        await axios.post('http://localhost:5000/api/translations', { translations: data })
        alert('Tłumaczenia zostały zapisane!')
      } catch (err) {
        this.error = 'Nie udało się zapisać tłumaczeń: ' + err.message
      }
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
  width: 30%;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    border-radius: 10px;

    &:nth-child(even) {
    }

    input {
      width: 60%; /* Rozmiar pola input */
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  }
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #45a049;
  }
}
</style>
