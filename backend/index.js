const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const login = require('./login')
const register = require('./registration')
const port = 3000

const cors = require('cors');

var corsOptions = {
  origin: "*"
}

app.use(cors(corsOptions));

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

  app.get('/users', db.getUsers)
  app.get('/users/:id', db.getUserById)
  app.post('/users', db.createUser)
  app.put('/users/:id', db.updateUser)
  app.delete('/users/:id', db.deleteUser)


  // login routes
  app.post('/login', login.login)
  app.post('/register', register.registerUser)

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
