import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'inzkuszyk',
  port: 3407
})

db.connect((err) => {
  if (err) {
    console.error('Błąd połączenia z bazą danych:', err)
    return
  }
  console.log('Połączono z bazą danych MySQL')
})

// API: GET  - WORDS FROM TABLE

app.get('/api/words', (req, res) => {
  const sql = 'SELECT * FROM words_fr'
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    res.json(results)
  })
})

// API: GET - RANDOM WORDS FROM THE TABLE

app.get('/api/random-words', (req, res) => {
  const sql = 'SELECT * FROM words_fr ORDER BY RAND() LIMIT 10'
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    res.json(results)
  })
})

// API: POST - CHECK TRANSLATED WORDS

app.post('/api/check-word', (req, res) => {
  const translations = req.body.translations

  if (!Array.isArray(translations) || translations.length === 0) {
    return res.status(400).json({ error: 'Invalid translations data' })
  }

  const results = []
  const promises = translations.map((item, index) => {
    const { word, translation } = item

    if (!word || !translation) {
      results.push({ index, word, translation, correct: false })
      return Promise.resolve()
    }

    const sql = 'SELECT translatedWord FROM words_fr WHERE word = ?'
    return new Promise((resolve) => {
      db.query(sql, [word], (err, dbResults) => {
        if (err || dbResults.length === 0) {
          results.push({ index, word, translation, correct: false })
          resolve()
          return
        }

        const correctTranslation = dbResults[0].translatedWord
        results.push({
          index,
          word,
          translation,
          correct: correctTranslation.toLowerCase() === translation.toLowerCase()
        })
        resolve()
      })
    })
  })

  Promise.all(promises)
    .then(() => {
      results.sort((a, b) => a.index - b.index)
      res.json(results)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`)
})
