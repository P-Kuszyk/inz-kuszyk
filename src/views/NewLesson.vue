<template>
  <div>
    <Navbar />
    <section class="section">
      <button v-if="!loading && !words.length" @click="fetchWords">Załaduj słowa</button>
      <div v-if="loading">Ładowanie...</div>
      <div v-if="error" class="error">Wystąpił błąd: {{ error }}</div>
      <form v-if="words.length" @submit.prevent="submitTranslations">
        <ul>
          <li v-for="(word, index) in words" :key="word.id">
            <span class="dbword">{{ word.word }}</span>
            <span class="arrow"> = </span>
            <input v-model="translations[index]" type="text" :placeholder="'Przetłumacz'" />
          </li>
        </ul>
        <button type="submit" class="save">Zapisz tłumaczenia</button>
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
      loading: false,
      error: null
    }
  },
  methods: {
    async fetchWords() {
      this.loading = true
      this.error = null
      await new Promise((resolve) => setTimeout(resolve, 500)) // Ładowanie słow po 0.5s
      try {
        const response = await axios.get('http://localhost:5000/api/words')
        this.words = response.data.slice(0, 10) // Ograniczenie do wyświetlenia tylko 10 rekordów z BD
        this.translations = new Array(this.words.length).fill('')
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },
    async submitTranslations() {
      try {
        const data = this.words.map((word, index) => ({
          wordId: word.id,
          translation: this.translations[index]
        }))

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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  text-align: center;
}

.section {
  display: flex;
  margin: auto;
  justify-content: center;
}

.error {
  color: red;
}

.dbword {
  width: 80px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
}

.arrow {
  margin-left: 10px;
  margin-right: 10px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  border-collapse: collapse;
  display: grid;
  grid-template-rows: repeat(10, auto);
  gap: 10px;
  width: 100%;
}

li {
  display: flex;
  align-items: center;
  padding: 8px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;

  &:nth-child(even) {
    background-color: #f1f1f1; // Parzyste rekordy
  }

  input {
    width: 60%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
}

button {
  padding: 10px 20px;
  cursor: pointer;
  border: 2px solid black;
  border-radius: 10px;
  color: $font-color;
  width: 30%;
  font-size: xx-large;
  background-color: $banner-background;

  &:hover {
    background-color: $navbar-color;
    color: $navbar-item;
    border: 2px solid #ccc;
    border-radius: 10px;
  }
}

.save {
  background-color: #4caf50;
  color: #ffffff;
  border: 1px solid black;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  margin-top: 2rem;

  &:hover {
    background-color: #45a049;
  }
}
</style>
