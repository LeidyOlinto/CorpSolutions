const express = require("express");
const cors = require("cors")
const app = express()

require('dotenv').config()

const corsOptions = { origin: "http://localhost:8080" }
app.use(cors(corsOptions))

app.use(express.json()) // recebe json
app.use(express.urlencoded({ extended: true})) // recebe forms

const AuthController = require('./controllers/auth')
const authController = new AuthController()
app.post('/register', authController.register)
app.post('/login', authController.login)

const PORT = process.env.PORT_SERVER || 8080

app.listen(PORT, ()=>{ console.log(`Servidor iniciado: http://localhost:${PORT}/`) })