const db = require("../db");

class PaymentController {
  async getPayments(res, req) {
    const id = req.query.id;

    const payments = await db.query("SELECT * FROM payment");

    res.json(payments.rows);
  }

  async getOnePayment(req, res) {
    const id = req.params.id;

    const payment = await db.query("SELECT * FROM payment where id = $1", [id]);

    res.json(payment.rows[0]);
  }
}

module.exports = new PaymentController();
