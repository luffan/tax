const db = require("../db");

class UserController {
    async createUser(req, res) {
        const {name, surname, middlename, passport_id, login, password, district, income_id, expenses_id} = req.body

        const newUser = await db.query(
          "INSERT INTO client (name, surname, middlename, passport_id, login, password, district, income_id, expenses_id) values ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
          [
            name,
            surname,
            middlename,
            passport_id,
            login,
            password,
            district,
            income_id,
            expenses_id,
          ]
        );

    res.json(newPerson.rows[0]);
  }

  async getUsers(req, res) {
    const users = await db.query("SELECT * FROM client");
    res.json(users.rows);
  }

  async getOneUser(req, res) {
    const id = req.params.id;

    const user = await db.query("SELECT * FROM client where id = $1", [id]);

    res.json(user.rows[0]);
  }

    async updateUser(req, res) {
      const {
        id,
        name,
        surname,
        middlename,
        passport_id,
        login,
        password,
        district,
        income_id,
        expenses_id,
      } = req.body;

      const user = await db.query(
        "UPDATE client set name = $1, surname = $2, middlename = $3, passport_id = $4, login = $5, password = $6, district = $7, income_id = $8, expenses_id = $9 where id = $10 RETURNING *",
        [
          name,
          surname,
          middlename,
          passport_id,
          login,
          password,
          district,
          income_id,
          expenses_id,
          id,
        ]
      );
    }

  async deleteUser(req, res) {
    const id = req.params.id;

    const user = await db.query("DELETE * FROM client where id = $1", [id]);

    res.json(user.rows[0]);
  }
}

module.exports = new UserController();
