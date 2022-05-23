const Pool = require('pg').Pool
const pool = new Pool({
    user: "Shmers",
    password: '0728',
    host: "localhost",
    port: 5432,
    database: "tax",
})


module.exports = pool