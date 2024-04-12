const express = require("express");
const cors = require("cors")
const app = express()

require('dotenv').config(); // Utiliza a variáveis de ambiente

// Permite receber requests apenas desses endereços
const corsOptions = { origin: "http://localhost:8080" }
app.use(cors(corsOptions))

app.use(express.json()) // recebe json
app.use(express.urlencoded({ extended: true})) // recebe forms

app.get('/', (req, res)=> res.send('GET'))
app.post('/', (req, res)=> res.send('POST'))
app.delete('/:id', (req, res)=> res.send('DELETE'))
app.put('/:id', (req, res)=> res.send('PUT'))

const connection = require('./config/connection')


const PORT = process.env.PORT_SERVER || 8080

app.listen(PORT, ()=>{ console.log(`Servidor iniciado: http://localhost:${PORT}/`) })