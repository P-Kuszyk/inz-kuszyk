import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'haslo',
  database: 'inzkuszyk'
})

db.connect((err) => {
  if (err) {
    console.error('Błąd połączenia z bazą danych:', err)
    return
  }
  console.log('Połączono z bazą danych MySQL')
})

// Endpoint API
app.get('/api/words', (req, res) => {
  const sql = 'SELECT * FROM words'
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    res.json(results)
  })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`)
})
