const db = require("../db");

class WorkerController {
  async createWorker(req, res) {
    try {
      const { name, surname, middlename, login, password } = req.body

      if (!name || !surname || !middlename || !login || !password) {
        res.sendStatus(500);
        return;
    }

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
    } catch (e) {
      res.sendStatus(500);
    }
  }

  async getWorker(req, res) {
    try {
      const workers = await db.query("SELECT * FROM worker");
      res.json(workers.rows);
    } catch (e) {
      res.sendStatus(500);
    }
  }

  async getOneWorker(req, res) {
    try {
      const id = req.params.id;

      const worker = await db.query("SELECT * FROM worker where id = $1", [id]);

      res.json(worker.rows[0]);
    } catch (e) {
      res.sendStatus(500);
    }
  }

  async updateWorker(req, res) {
    try {
      const {
        id,
        name,
        surname,
        middlename,
        login,
        password,
      } = req.body;

      if (!id) {
        res.statusCode(500);
        return;
    }

      const worker = await db.query(
        "UPDATE worker set name = $1, surname = $2, middlename = $3, login = $4, password = $5 where id = $6 RETURNING *",
        [
          name,
          surname,
          middlename,
          login,
          password,
          id,
        ]
      );

      res.json(id)
    } catch (e) {
      res.sendStatus(500);
    }
  }

  async deleteWorker(req, res) {
    try {
      const id = req.params.id;

      const worker = await db.query("DELETE * FROM worker where id = $1", [id]);

      res.json(worker.rows[0]);
    } catch (e) {
      res.sendStatus(500);
    }
  }
}

module.exports = new WorkerController();
