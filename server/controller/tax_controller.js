const db = require("../db");

class TaxController {
  async createTax(req, res) {
    const { cost, expiration_date, client_id, payment_id } = req.body;

    const newTax = await db.query(
      "INSERT INTO tax (cost, expiration_date, client_id, payment_id) values ($1, $2, $3, $4) RETURNING *",
      [cost, expiration_date, client_id, payment_id]
    );

    res.json(newTax.rows[0]);
  }

  async getTaxes(req, res) {
    const users = await db.query("SELECT * FROM tax");
    res.json(users.rows);
  }

  async getTaxByUserAndPayment(res, req) {
    const id = req.query.id;

    const taxs = await db.query("SELECT * FROM tax where client_id = $1", [id]);

    res.json(taxs.rows);
  }

  async updateTax(req, res) {
    const {
      id,
      cost, expiration_date, client_id, payment_id
    } = req.body;

    const tax = await db.query(
        "UPDATE tax set cost = $1, expiration_date = $2, client_id = $3, payment_id = $4 WHERE id = $5 RETURNING *",
        [
          cost,
          expiration_date,
          client_id,
          payment_id,
          id,
        ]
    );
    res.json(id);
  }

  async deleteTax(req, res) {
    const id = req.params.id;

    const tax = await db.query("DELETE FROM tax where id = $1", [id]);

    res.sendStatus(200);
  }
}

module.exports = new TaxController();
