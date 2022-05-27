const Pool = require('pg').Pool
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    password:'0728',
    port:5432,
    database: 'test',
})


module.exports = pool