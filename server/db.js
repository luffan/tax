const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "19102001",
  port: 5432,
  database: "test",
});

module.exports = pool;
