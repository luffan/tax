const db = require("../db");

class PaymentController {
  async getPayments(req, res) {
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
