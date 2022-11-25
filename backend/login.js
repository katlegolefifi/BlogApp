const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'blog',
  password: 'admin12345',
  port: 5432,
})

// code your login function here

module.exports = { 
    // export your login function
}