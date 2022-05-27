const db = require("../db");

class WorkerController {
    async createWorker(req, res) {
        const {name, surname, middlename, login, password} = req.body

        const newWorker = await db.query(
          "INSERT INTO worker (name, surname, middlename, login, password) values ($1, $2, $3, $4, $5) RETURNING *",
          [
            name,
            surname,
            middlename,
            login,
            password,
          ]
        );

    res.json(newWorker.rows[0]);
  }

  async getWorker(req, res) {
    const workers = await db.query("SELECT * FROM worker");
    res.json(workers.rows);
  }

  async getOneWorker(req, res) {
    const id = req.params.id;

    const worker = await db.query("SELECT * FROM worker where id = $1", [id]);

    res.json(worker.rows[0]);
  }

    async updateWorker(req, res) {
      const {
        id,
        name,
        surname,
        middlename,
        login,
        password,
      } = req.body;

      const worker = await db.query(
        "UPDATE worker set name = $1, surname = $2, middlename = $3, passport_id = $4, login = $5, password = $6, district = $7, income_id = $8, expenses_id = $9 where id = $10 RETURNING *",
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

  async deleteWorker(req, res) {
    const id = req.params.id;

    const worker = await db.query("DELETE * FROM worker where id = $1", [id]);

    res.json(worker.rows[0]);
  }
}

module.exports = new WorkerController();
