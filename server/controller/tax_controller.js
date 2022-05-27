const db = require("../db");

class TaxController {
  async createTax(res, req) {
    const { cost, expiration_date, client_id, payment_id } = req.body;

    const newTax = await db.query(
      "INSERT INTO tax (cost, expiration_date, client_id, payment_id) values ($1, $2, $3, $4) RETURNINIG *",
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
}

module.exports = new TaxController();
