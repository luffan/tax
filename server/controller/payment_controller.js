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

    async updatePayment(req, res) {
        const {
            id,
            date,
            amount,
        } = req.body;

        const payment = await db.query(
            "UPDATE payment set date = $1, amount = $2 WHERE id = $3 RETURNING *",
            [
                date,
                amount,
                id,
            ]
        );
        res.json(id);
    }

    async createPayment(req, res) {
        const {
            date, amount
        } = req.body;

        const newTax = await db.query(
            "INSERT INTO payment (date, amount) values ($1, $2) RETURNING *",
            [date, amount]
        );

        res.json(newTax.rows[0]);
    }

    async deletePayment(req, res) {
        const id = req.params.id;

        const user = await db.query("DELETE * FROM payment where id = $1", [id]);

        res.json(user.rows[0]);
    }

}

module.exports = new PaymentController();
